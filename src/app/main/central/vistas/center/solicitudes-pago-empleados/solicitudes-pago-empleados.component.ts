import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {PagoProveedoresService} from '../solicitudes-pago-proveedores/pago-proveedores.service';
import {DatePipe} from '@angular/common';
import {CoreMenuService} from '../../../../../../@core/components/core-menu/core-menu.service';
import {SolicitudPagoEmpleadosService} from './solicitud-pago-empleados.service';
import {SolicitudesCreditosService} from '../solicitudes-creditos/solicitudes-creditos.service';

@Component({
  selector: 'app-solicitudes-pago-empleados',
  templateUrl: './solicitudes-pago-empleados.component.html',
  styleUrls: ['./solicitudes-pago-empleados.component.scss'],
  providers: [DatePipe]
})
export class SolicitudesPagoEmpleadosComponent implements OnInit, AfterViewInit {
  @ViewChild(NgbPagination) paginator: NgbPagination;
  @ViewChild('negarMdl') negarMdl;
  @ViewChild('procesarMdl') procesarMdl;

  // public
  public page = 1;
  public page_size: any = 4;
  public maxSize;
  public collectionSize;

  public listaPagoEmpleados;
  private _unsubscribeAll: Subject<any>;
  public usuario;
  public observacion = '';
  public idPagoEmpleado = '';
  private solicitudPago;
  public numeroComprobante = '';
  public date = new Date();

  constructor(
    private _solicitudCreditosService: SolicitudesCreditosService,
    private _pagoEmpleadosService: SolicitudPagoEmpleadosService,
    private datePipe: DatePipe,
    private _coreMenuService: CoreMenuService,
    private _modalService: NgbModal,
  ) {
    this._unsubscribeAll = new Subject();
    this.usuario = this._coreMenuService.grpCoopCenterUser;
  }

  ngOnInit(): void {
    this.obtenerSolicitudesPagoEmpleados();
  }

  ngAfterViewInit() {
    this.iniciarPaginador();
  }

  iniciarPaginador() {
    this.paginator.pageChange.subscribe(() => {
      this.obtenerSolicitudesPagoEmpleados();
    });
  }

  obtenerSolicitudesPagoEmpleados() {
    this._pagoEmpleadosService.obtenerSolicitudesPagoProveedores({
      page_size: this.page_size,
      page: this.page - 1,
      estado: ['Activo', 'Inactivo']
    })
      .subscribe((info) => {
        this.collectionSize = info.cont;
        this.listaPagoEmpleados = info.info;
      });
  }

  seguroNegarModal(id) {
    this.idPagoEmpleado = id;
    this.observacion = '';
    this.abrirModal(this.negarMdl);
  }

  enviarNegar() {
    this._pagoEmpleadosService.actualizarSolicitudesPagoProveedores({
      _id: this.idPagoEmpleado,
      estado: 'Negado',
      observacion: this.observacion,
      fechaProceso: this.date,
    })
      .subscribe((info) => {
        this.obtenerSolicitudesPagoEmpleados();
      });
  }

  enviarProcesar() {
    this._pagoEmpleadosService.actualizarSolicitudesPagoProveedores({
      _id: this.idPagoEmpleado,
      estado: 'Aprobado',
      fechaFirma: this.fechaActual(),
      numeroComprobante: this.numeroComprobante,
      fechaProceso: this.date
    })
      .subscribe((info) => {
        this._modalService.dismissAll();
        this.obtenerSolicitudesPagoEmpleados();
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
    this.idPagoEmpleado = pago._id;
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
      this.obtenerSolicitudesPagoEmpleados();
    });
  }
}
