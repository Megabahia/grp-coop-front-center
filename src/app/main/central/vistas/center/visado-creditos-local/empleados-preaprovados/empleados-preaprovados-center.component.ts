import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {NgbModal, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VisadoCreditosLocalService} from '../visado-creditos-local.service';
import {CoreSidebarService} from '../../../../../../../@core/components/core-sidebar/core-sidebar.service';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-empleados-preaprovados-center',
    templateUrl: './empleados-preaprovados-center.component.html',
    styleUrls: ['./empleados-preaprovados-center.component.scss'],
    providers: [DatePipe],
})
export class EmpleadosPreaprovadosCenterComponent implements OnInit, AfterViewInit {

    @ViewChild(NgbPagination) paginator: NgbPagination;

    public page = 1;
    public page_size: any = 4;
    public maxSize;
    public collectionSize;
    // Variables
    public listaCreditos;
    public userViewData;
    private ocupacionSolicitante;
    public referenciasSolicitante;
    public ingresosSolicitante;
    public gastosSolicitante;
    public pantalla = 0;
    public checks = [
        {'label': 'Identificacion', 'valor': false},
        {'label': 'Foto Carnet', 'valor': false},
        {'label': 'Papeleta votacion', 'valor': false},
        {'label': 'Identificacion conyuge', 'valor': false},
        {'label': 'Papeleta votacion conyuge', 'valor': false},
        {'label': 'Planilla luz domicilio', 'valor': false},
        {'label': 'Mecanizado Iess', 'valor': false},
        {'label': 'Matricula vehiculo', 'valor': false},
        {'label': 'Impuesto predial', 'valor': false},
        {'label': 'Buro credito', 'valor': false},
        {'label': 'Calificacion buro', 'valor': false},
        {'label': 'Observación', 'valor': false},
    ];
    // Formulario
    public soltero = false;
    public actualizarCreditoForm: FormGroup;
    public submitted = false;
    public cargando = false;
    public actualizarCreditoFormData;
    private credito;
    public casaPropia = false;
    // Select Custom header footer template
    public selectEmpresasCorp = [{name: 'Holaaa'}];
    public selectEmpresasCorpSelected = [];

    constructor(
        private _solicitudCreditosService: VisadoCreditosLocalService,
        private modalService: NgbModal,
        private _coreSidebarService: CoreSidebarService,
        private _formBuilder: FormBuilder,
        private datePipe: DatePipe,
    ) {
        this.obtenerEmpresasCorp();
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.iniciarPaginador();
        this.obtenerSolicitudesCreditos();
    }

    get controlsFrom() {
        return this.actualizarCreditoForm.controls;
    }

    iniciarPaginador() {
        this.paginator.pageChange.subscribe(() => {
            this.obtenerSolicitudesCreditos();
        });
    }

    transformarFecha(fecha) {
        return this.datePipe.transform(fecha, 'yyyy-MM-dd');
    }

    modalOpenSLC(modalSLC) {
        this.modalService.open(modalSLC, {
                centered: true,
                size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
            }
        );
    }

    obtenerSolicitudesCreditos() {
        this._solicitudCreditosService.obtenerSolicitudesCreditos({
            page_size: this.page_size,
            page: this.page - 1,
            tipoCredito: 'Empleado-PreAprobado',
            cargarOrigen: 'BIGPUNTOS',
            alcance: 'LOCAL',
        }).subscribe(info => {
            this.collectionSize = info.cont;
            this.listaCreditos = info.info;
        });
    }

    viewDataUser(modal, credito) {
        this.credito = credito;
        const user = credito.user;
        this.soltero = (user.estadoCivil === 'Solter@' || user.estadoCivil === 'Soltero' ||
            user.estadoCivil === 'Divorciad@' || user.estadoCivil === 'Divorciado');
        this.casaPropia = (user.tipoVivienda === 'Propia');
        this.modalOpenSLC(modal);
        this.userViewData = user;
        this.ocupacionSolicitante = user.ocupacionSolicitante;
        this.referenciasSolicitante = user.referenciasSolicitante;
        this.ingresosSolicitante = user.ingresosSolicitante;
        this.gastosSolicitante = user.gastosSolicitante;
    }

    verDocumentos(credito) {
        this.credito = credito;
        this.submitted = false;
        this.actualizarCreditoFormData = new FormData();
        this.pantalla = 1;
        this.soltero = (credito.estadoCivil === 'Solter@' || credito.estadoCivil === 'Soltero' ||
            credito.user.estadoCivil === 'Solter@' || credito.user.estadoCivil === 'Divorciado' ||
            credito.estadoCivil === 'Divorciad@' || credito.estadoCivil === 'Divorciado');
        console.log(this.soltero, 'this.soltero');
        this.actualizarCreditoForm = this._formBuilder.group({
            id: [credito._id, [Validators.required]],
            identificacion: ['', credito.identificacion ? [] : [Validators.required]],
            ruc: ['', credito.identificacion ? [] : [Validators.required]],
            fotoCarnet: ['', credito.fotoCarnet ? [] : [Validators.required]],
            papeletaVotacion: ['', credito.papeletaVotacion ? [] : [Validators.required]],
            identificacionConyuge: ['', this.soltero ? credito?.identificacionConyuge : [Validators.required]],
            papeletaVotacionConyuge: ['', this.soltero ? [] : [Validators.required]],
            planillaLuzDomicilio: ['', credito.planillaLuzDomicilio ? [] : [Validators.required]],
            mecanizadoIess: ['', credito.mecanizadoIess ? [] : [Validators.required]],
            matriculaVehiculo: [''],
            impuestoPredial: [''],
            buroCredito: ['', credito.buroCredito ? [] : [Validators.required]],
            calificacionBuro: [credito.calificacionBuro, [Validators.required]],
            observacion: [credito.observacion, [Validators.required]],
            checkIdenficicacion: ['', [Validators.requiredTrue]],
            checkRuc: ['', [Validators.requiredTrue]],
            checkFotoCarnet: ['', [Validators.requiredTrue]],
            checkPapeletaVotacion: ['', [Validators.requiredTrue]],
            checkIdentificacionConyuge: ['', this.soltero ? [] : [Validators.requiredTrue]],
            checkPapeletaVotacionConyuge: ['', this.soltero ? [] : [Validators.requiredTrue]],
            checkPlanillaLuzDomicilio: ['', [Validators.requiredTrue]],
            checkMecanizadoIess: ['', [Validators.requiredTrue]],
            checkMatriculaVehiculo: [''],
            checkImpuestoPredial: [''],
            checkBuroCredito: ['', [Validators.requiredTrue]],
            checkCalificacionBuro: ['', [Validators.requiredTrue]],
            checkObservacion: ['', [Validators.requiredTrue]],
        });
        this.checks = typeof credito.checks === 'object' ? credito.checks : JSON.parse(credito.checks);
    }

    cambiarEstado($event) {
        this.pantalla = $event;
    }

    cancelar() {
        this.pantalla = 0;
    }

    subirDoc(event, key) {
        if (event.target.files && event.target.files[0]) {
            const doc = event.target.files[0];
            this.actualizarCreditoFormData.delete(`${key}`);
            this.actualizarCreditoFormData.append(`${key}`, doc, Date.now() + '_' + doc.name);
        }
    }

    actualizarSolicitudCredito() {
        this.submitted = true;
        if (this.actualizarCreditoForm.invalid) {
            return;
        }
        const {
            id,
            identificacion,
            fotoCarnet,
            papeletaVotacion,
            identificacionConyuge,
            papeletaVotacionConyuge,
            planillaLuzDomicilio,
            mecanizadoIess,
            matriculaVehiculo,
            impuestoPredial,
            buroCredito,
            calificacionBuro,
            observacion, ...resto
        } = this.actualizarCreditoForm.value;
        const creditoValores = Object.values(this.actualizarCreditoForm.value);
        const creditoLlaves = Object.keys(this.actualizarCreditoForm.value);
        const remover = ['buroCredito', 'evaluacionCrediticia', 'identificacion', 'ruc', 'papeletaVotacion', 'identificacionConyuge', 'mecanizadoIess',
            'papeletaVotacionConyuge', 'planillaLuzNegocio', 'planillaLuzDomicilio', 'facturas', 'facturasVentas2meses', 'facturasVentas2meses2', 'facturasVentasCertificado',
            'matriculaVehiculo', 'impuestoPredial', 'fotoCarnet'];
        creditoLlaves.map((llaves, index) => {
            if (creditoValores[index] && !remover.find((item: any) => item === creditoLlaves[index])) {
                this.actualizarCreditoFormData.delete(llaves);
                this.actualizarCreditoFormData.append(llaves, creditoValores[index]);
            }
        });
        this.checks = [
            {'label': 'Identificacion', 'valor': resto.checkIdenficicacion},
            {'label': 'Foto Carnet', 'valor': resto.checkFotoCarnet},
            {'label': 'Papeleta votacion', 'valor': resto.checkPapeletaVotacion},
            {'label': 'Identificacion conyuge', 'valor': resto.checkIdentificacionConyuge},
            {'label': 'Papeleta votacion conyuge', 'valor': resto.checkPapeletaVotacionConyuge},
            {'label': 'Planilla luz domicilio', 'valor': resto.checkPlanillaLuzDomicilio},
            {'label': 'Mecanizado Iess', 'valor': resto.checkMecanizadoIess},
            {'label': 'Matricula vehiculo', 'valor': resto.checkMatriculaVehiculo},
            {'label': 'Impuesto predial', 'valor': resto.checkImpuestoPredial},
            {'label': 'Buro credito', 'valor': resto.checkBuroCredito},
            {'label': 'Calificacion buro', 'valor': resto.checkCalificacionBuro},
            {'label': 'Observación', 'valor': resto.checkObservacion},
        ];
        if (this.soltero) {
            this.checks.splice(3, 2);
        }
        this.cargando = true;
        this.actualizarCreditoFormData.delete('estado');
        this.actualizarCreditoFormData.append('estado', 'Enviado');
        this.actualizarCreditoFormData.delete('checks');
        this.actualizarCreditoFormData.append('checks', JSON.stringify(this.checks));
        this._solicitudCreditosService.actualizarSolictudesCreditos(this.actualizarCreditoFormData).subscribe(() => {
                this.cargando = false;
                // this.mensaje = 'Crédito actualizado con éxito';
                // this.cerrarModal('actualizar-credito');
                this.pantalla = 0;
                this.obtenerSolicitudesCreditos();
                this._solicitudCreditosService.deleteDocumentFirebase(this.actualizarCreditoFormData.get('id'));
            },
            () => {
                this.cargando = false;
                // this.mensaje = 'Error al actualizar el crédito';
                // this.abrirModal(this.mensajeModal);
            });
    }

    consumirAWS() {
        this._solicitudCreditosService.actualizarAWS().subscribe((info) => {
            console.log(info);
            this.obtenerSolicitudesCreditos();
        });
    }

    obtenerEmpresasCorp() {
        this._solicitudCreditosService.obtenerEmpresasCorp({}).subscribe((info) => {
            this.selectEmpresasCorp = info.info;
        });
    }

    actualizarEmpresasAplican(credito_id) {
        this._solicitudCreditosService.actualizarSolictudesCreditosObservacion({
            _id: credito_id, empresasAplican: JSON.stringify(this.selectEmpresasCorpSelected)
        }).subscribe(() => {
            this.obtenerSolicitudesCreditos();
            this.cerrarModal();
        });
    }

    customHeaderFooterSelectAll() {
        this.selectEmpresasCorpSelected = this.selectEmpresasCorp.map(x => x.name);
    }

    customHeaderFooterUnselectAll() {
        this.selectEmpresasCorpSelected = [];
    }

    modalSelectOpen(modalSelect, empresasAplican) {
        this.selectEmpresasCorpSelected = empresasAplican;
        this.modalService.open(modalSelect, {
            windowClass: 'modal'
        });
    }

    cerrarModal() {
        this.modalService.dismissAll();
    }
    viewReferences(modal, referenciasSolicitante) {
        this.obtenerSolicitudesCreditos();
        this.referenciasSolicitante = referenciasSolicitante;
        console.log('ahora tiene', this.referenciasSolicitante);

        this.modalOpenSLC(modal);
    }

    familiarIsValid(event, index) {
        const checkbox = event.target as HTMLInputElement;
        if (checkbox.checked) {
            console.log('El checkbox está seleccionado');
            this.referenciasSolicitante[index].valido = true;
        } else {
            console.log('El checkbox no está seleccionado');
            this.referenciasSolicitante[index].valido = false;

            // Realiza aquí las acciones que desees cuando el checkbox se desmarca.
        }
    }

    guardarReferencias(credito) {

        this._solicitudCreditosService.actualizarSolictudesCreditosObservacion({
            _id: credito._id,
            user: {...credito.user, referenciasSolicitante: this.referenciasSolicitante}
        }).subscribe(() => {
            console.log('actualizo');
            this.obtenerSolicitudesCreditos();
            this.cerrarModal();
        });

    }
}
