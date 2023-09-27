import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {PagoProveedoresService} from '../solicitudes-pago-proveedores/pago-proveedores.service';
import {DatePipe} from '@angular/common';
import {CoreMenuService} from '../../../../../../@core/components/core-menu/core-menu.service';
import {log} from 'util';
import {SolicitudPagoEmpleadosService} from './solicitud-pago-empleados.service';

@Component({
    selector: 'app-solicitud-pago-empleados',
    templateUrl: './solicitud-pago-casas-comerciales.component.html',
    styleUrls: ['./solicitud-pago-casas-comerciales.component.scss'],
    providers: [DatePipe]
})
export class SolicitudPagoCasasComercialesComponent implements OnInit, AfterViewInit {

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


    constructor(
        private _solicitudesPagoEmpleadosService: SolicitudPagoEmpleadosService,
        private datePipe: DatePipe,
        private _coreMenuService: CoreMenuService,
        private _modalService: NgbModal,
    ) {
    }

    ngOnInit(): void {
        this._unsubscribeAll = new Subject();
        this.usuario = this._coreMenuService.grpCoopCenterUser;
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
        this._solicitudesPagoEmpleadosService.obtenerSolicitudesPagoEmpleados({page_size: this.page_size, page: this.page - 1,
            estado: ['Pendiente', 'Aprobado', 'Negado']})
            .subscribe((info) => {
                this.collectionSize = info.cont;
                const newInfo = info.info.map((value) => {
                        value.cliente = JSON.parse(value.cliente);
                        return value;
                    }
                );
                console.log('newInfo', newInfo);
                this.listaCreditos = newInfo;
            });
    }

    seguroNegarModal(id) {
        this.idPagoProveedor = id;
        this.observacion = '';
        this.abrirModal(this.negarMdl);
    }

    enviarNegar() {
        this._solicitudesPagoEmpleadosService.actualizarSolicitudesPagoProveedores({
            _id: this.idPagoProveedor,
            estado: 'Negado',
            observacion: this.observacion
        })
            .subscribe((info) => {
                this.obtenerSolicitudesCreditos();
                this._modalService.dismissAll();
            });
    }


    enviarProcesar() {
        this._solicitudesPagoEmpleadosService.actualizarSolicitudesPagoProveedores({
            _id: this.idPagoProveedor,
            estado: 'Procesar'
        })
            .subscribe((info) => {
                this._modalService.dismissAll();
                this.obtenerSolicitudesCreditos();
            });
    }

    getUsuario(usuario, atributo) {
        return usuario.cliente?.[atributo];
    }

    fechaActual() {
        return this.datePipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');
    }

    procesarPago(pago) {
        this.idPagoProveedor = pago._id;
        this.solicitudPago = pago;
        if (pago?.casaComercial) {
            this.solicitudPago.numeroCuenta = JSON.parse(pago?.casaComercial).numeroCuenta;
            this.solicitudPago.titularCuenta = JSON.parse(pago?.casaComercial).titularCuenta;
            this.solicitudPago.correoTitular = JSON.parse(pago?.casaComercial).correoTitular;
            this.solicitudPago.bancoDestino = JSON.parse(pago?.casaComercial).bancoDestino;
        }
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

}
