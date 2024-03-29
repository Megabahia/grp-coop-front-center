import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import {CoreMenuService} from '../../../../../../@core/components/core-menu/core-menu.service';
import {Subject} from 'rxjs';
import {PagoProveedoresService} from './pago-proveedores.service';
import {SolicitudesCreditosService} from '../solicitudes-creditos/solicitudes-creditos.service';

/**
 * COOP
 * Center
 * Esta pantalla sirve para mostrar las solicitudes de credito de proveedores
 * Rutas:
 * `${environment.apiUrl}/corp/pagoProveedores/list/`,
 * `${environment.apiUrl}/corp/pagoProveedores/update/${datos._id}`,
 */

@Component({
  selector: 'app-solicitudes-pago-proveedores',
  templateUrl: './solicitudes-pago-proveedores.component.html',
  styleUrls: ['./solicitudes-pago-proveedores.component.scss'],
  providers: [DatePipe]
})
export class SolicitudesPagoProveedoresComponent implements OnInit, AfterViewInit {
  @ViewChild(NgbPagination) paginator: NgbPagination;
  @ViewChild('negarMdl') negarMdl;
  @ViewChild('procesarMdl') procesarMdl;

  // public
  public page = 1;
  public page_size: any = 4;
  public maxSize;
  public collectionSize;

  public listaCreditos;
  private _unsubscribeAll: Subject<any>;
  public usuario;
  public observacion = '';
  public idPagoProveedor = '';
  public solicitudPago;
  public numeroComprobante = '';
  public date = new Date();

  constructor(
    private _solicitudCreditosService: SolicitudesCreditosService,
    private _pagoProveedoresService: PagoProveedoresService,
    private datePipe: DatePipe,
    private _coreMenuService: CoreMenuService,
    private _modalService: NgbModal,
  ) {
    this._unsubscribeAll = new Subject();
    this.usuario = this._coreMenuService.grpCoopCenterUser;
  }

  ngOnInit(): void {
    this.obtenerSolicitudesCreditos();
  }

  ngAfterViewInit() {
    this.iniciarPaginador();
  }

  iniciarPaginador() {
    this.paginator.pageChange.subscribe(() => {
      this.obtenerSolicitudesCreditos();
    });
  }

  obtenerSolicitudesCreditos() {
    this._pagoProveedoresService.obtenerSolicitudesPagoProveedores({page_size: this.page_size, page: this.page - 1})
      .subscribe((info) => {
        this.collectionSize = info.cont;
        this.listaCreditos = info.info;
      });
  }

  seguroNegarModal(id) {
    this.idPagoProveedor = id;
    this.observacion = '';
    this.abrirModal(this.negarMdl);
  }

  enviarNegar() {
    this._pagoProveedoresService.actualizarSolicitudesPagoProveedores({
      _id: this.idPagoProveedor,
      estado: 'Negado',
      observacion: this.observacion,
      fechaProceso: this.date,
    })
      .subscribe((info) => {
        this.obtenerSolicitudesCreditos();
      });
  }

  enviarProcesar() {
    this._pagoProveedoresService.actualizarSolicitudesPagoProveedores({
      _id: this.idPagoProveedor,
      estado: 'Procesar',
      fechaFirma: this.fechaActual(),
      numeroComprobante: this.numeroComprobante,
      fechaProceso: this.date
    })
      .subscribe((info) => {
        this._modalService.dismissAll();
        this.obtenerSolicitudesCreditos();
      });
  }

  getUsuario(usuario, atributo) {
    return JSON.parse(usuario.usuario)?.[atributo];
  }

  fechaActual() {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');
  }

  procesarPago(pago) {
    this.numeroComprobante = '';
    this.idPagoProveedor = pago._id;
    this.solicitudPago = pago;
    this.abrirModal(this.procesarMdl);
  }

  transformarFecha(fecha) {
    return this.datePipe.transform(fecha, 'yyyy-MM-dd');
  }

  transformarObjecto(usuario, atributo) {
    return JSON.parse(usuario)[atributo];
  }

  abrirModal(modal) {
    this._modalService.open(modal);
  }

  consumirAWS() {
    this._solicitudCreditosService.actualizarAWS().subscribe((info) => {
      console.log(info);
      this.obtenerSolicitudesCreditos();
    });
  }
}
