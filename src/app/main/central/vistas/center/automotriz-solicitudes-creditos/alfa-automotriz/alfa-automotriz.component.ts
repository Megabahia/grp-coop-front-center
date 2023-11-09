import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoreSidebarService} from '../../../../../../../@core/components/core-sidebar/core-sidebar.service';
import {DatePipe} from '@angular/common';
import {SolicitudesCreditosService} from '../../solicitudes-creditos/solicitudes-creditos.service';

/**
 * COOP
 * Center
 * ESta pantalla sirve para listar los creditos empleados
 * Rutas:
 * `${environment.apiUrl}/corp/creditoPersonas/list/`,
 * `${environment.apiUrl}/corp/creditoPersonas/update/${datos.get('id')}`,
 * `${environment.apiUrl}/corp/creditoPersonas/pruebaConsumer`
 * `${environment.apiUrl}/corp/empresas/list/comercial`,
 * `${environment.apiUrl}/corp/creditoPersonas/update/${datos._id}`,
 * `${environment.apiUrl}/corp/creditoPersonas/update/${datos._id}`,
 */

@Component({
  selector: 'app-alfa',
  templateUrl: './alfa-automotriz.component.html',
  styleUrls: ['./alfa-automotriz.component.scss'],
  providers: [DatePipe],
})
export class AlfaAutomotrizComponent implements OnInit, AfterViewInit {

  @ViewChild(NgbPagination) paginator: NgbPagination;

  public page = 1;
  public page_size: any = 4;
  public maxSize;
  public collectionSize;

  // Variables
  public listaCreditos;
  public userViewData;
  public ocupacionSolicitante;
  public referenciasSolicitante;
  public ingresosSolicitante;
  public gastosSolicitante;
  public pantalla = 0;
  public credito;
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
  public casaPropia = false;
  public motivo: string;
  public estadoCredito: any;

  constructor(
    private _solicitudCreditosService: SolicitudesCreditosService,
    private modalService: NgbModal,
    private _coreSidebarService: CoreSidebarService,
    private _formBuilder: FormBuilder,
    private datePipe: DatePipe,
  ) {
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
      tipoCredito: 'Credito Automotriz Alfa',
      cargarOrigen: 'BIGPUNTOS',
      alcance: ['LOCAL', 'OMNIGLOBAL'],
      enviado: 1,
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
    this.ocupacionSolicitante = typeof user.ocupacionSolicitante === 'string' ? JSON.parse(user.ocupacionSolicitante) : user.ocupacionSolicitante;
    this.referenciasSolicitante = typeof user.referenciasSolicitante === 'string' ? JSON.parse(user.referenciasSolicitante) : user.referenciasSolicitante;
    this.ingresosSolicitante = typeof user.ingresosSolicitante === 'string' ? JSON.parse(user.ingresosSolicitante) : user.ingresosSolicitante;
    this.gastosSolicitante = typeof user.gastosSolicitante === 'string' ? JSON.parse(user.gastosSolicitante) : user.gastosSolicitante;
  }

  verDocumentos(credito) {
    console.log('log---', credito);
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
      solicitudCredito: ['', [Validators.required]],
      evaluacionCrediticia: ['', [Validators.required]],
      codigoClienteCreado: ['', [Validators.required]],
      codigoCuentaCreada: ['', [Validators.required]],
      buroCreditoIfis: ['', [Validators.required]],
      calificacionBuroIfis: ['', [Validators.required]],
      calificacionBuro: [credito.calificacionBuro],
      observacion: [credito.observacion],
      checkSolicitudCredito: ['', [Validators.requiredTrue]],
      checkEvaluacionCrediticia: ['', [Validators.requiredTrue]],
      checkCodigoClienteCreado: ['', [Validators.requiredTrue]],
      checkCodigoCuentaCreada: ['', [Validators.requiredTrue]],
      checkBuroCreditoIfis: ['', [Validators.requiredTrue]],
      checkCalificacionBuroIfis: ['', [Validators.requiredTrue]],
      checkBuroRevisado: ['', [Validators.requiredTrue]],
      checkIdenficicacion: ['', [Validators.requiredTrue]],
      checkRuc: ['',],
      checkFotoCarnet: ['', [Validators.requiredTrue]],
      checkPapeletaVotacion: ['', [Validators.requiredTrue]],
      checkIdentificacionConyuge: ['', this.soltero ? [] : [Validators.requiredTrue]],
      checkPapeletaVotacionConyuge: ['', this.soltero ? [] : [Validators.requiredTrue]],
      checkPlanillaLuzDomicilio: ['', [Validators.requiredTrue]],
      checkMatriculaVehiculo: [''],
      checkImpuestoPredial: [''],
      checkCedulaGarante: [''],
      checkPapeletaVotacionGarante: [''],
      checkFotoGarante: [''],
      checkImpuestoPredialGarante: [''],
      checkMatriculaVehiculoGarante: [''],
      checkPlanillaDomicilioGarante: [''],
      checkBuroCredito: ['', [Validators.requiredTrue]],
      checkCalificacionBuro: ['', [Validators.requiredTrue]],
      checkObservacion: ['', [Validators.requiredTrue]],
    });
    console.log('tipo de checks', typeof credito.checks);
    this.checks = (typeof credito.checks === 'object') ? credito.checks : JSON.parse(credito.checks);
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

  actualizarSolicitudCredito(estado?: string) {
    console.log('llega---', this.actualizarCreditoForm);
    this.submitted = true;
    if (this.estadoCredito !== 'Por Completar' && this.estadoCredito !== 'Negado') {
      if (this.actualizarCreditoForm.invalid) {
        console.log(' no valido form');
        return;
      }
    }
    console.log('');
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
    const remover = ['buroCredito', 'evaluacionCrediticia', 'identificacion', 'papeletaVotacion', 'identificacionConyuge', 'mecanizadoIess',
      'papeletaVotacionConyuge', 'planillaLuzNegocio', 'planillaLuzDomicilio', 'facturas', 'matriculaVehiculo', 'impuestoPredial', 'fotoCarnet',
      'solicitudCredito', 'buroCreditoIfis'];
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
    this.actualizarCreditoFormData.append('estado', estado);
    this.actualizarCreditoFormData.delete('motivo');
    this.actualizarCreditoFormData.append('motivo', this.motivo);
    if (estado !== 'Por Completar') {
      this.actualizarCreditoFormData.delete('checks');
      this.actualizarCreditoFormData.append('checks', JSON.stringify(this.checks));
    }
    console.log('this.actualizarCreditoFormData', this.actualizarCreditoFormData);
    this._solicitudCreditosService.actualizarSolictudesCreditos(this.actualizarCreditoFormData).subscribe((info) => {
        this.cerrarModal();
        this.cargando = false;
        if (estado === 'Negado' || estado === 'Por Completar') {
          this.pantalla = 0;
        } else {
          this.pantalla = 3;
        }
        this.obtenerSolicitudesCreditos();
        this._solicitudCreditosService.deleteDocumentFirebase(this.actualizarCreditoFormData.get('id'));
      },
      (error) => {
        this.cargando = false;
      });
  }

  actualizarSolicitudCreditoNegado(estado) {
    const creditoValores = Object.values(this.actualizarCreditoForm.value);
    const creditoLlaves = Object.keys(this.actualizarCreditoForm.value);
    const remover = ['buroCredito', 'evaluacionCrediticia', 'identificacion', 'papeletaVotacion', 'identificacionConyuge', 'mecanizadoIess',
      'papeletaVotacionConyuge', 'planillaLuzNegocio', 'planillaLuzDomicilio', 'facturas', 'matriculaVehiculo', 'impuestoPredial', 'fotoCarnet',
      'solicitudCredito', 'buroCreditoIfis'];
    creditoLlaves.map((llaves, index) => {
      if (creditoValores[index] && !remover.find((item: any) => item === creditoLlaves[index])) {
        this.actualizarCreditoFormData.delete(llaves);
        this.actualizarCreditoFormData.append(llaves, creditoValores[index]);
      }
    });
    this.cargando = true;
    this.actualizarCreditoFormData.delete('estado');
    this.actualizarCreditoFormData.append('estado', estado);
    this._solicitudCreditosService.actualizarSolictudesCreditos(this.actualizarCreditoFormData).subscribe((info) => {
        this.cargando = false;
        this.obtenerSolicitudesCreditos();
        this._solicitudCreditosService.deleteDocumentFirebase(this.actualizarCreditoFormData.get('id'));
        if (estado === 'Negado') {
          this.pantalla = 0;
        } else {
          this.pantalla = 3;
        }
      },
      (error) => {
        this.cargando = false;
        if (estado === 'Negado') {
          this.pantalla = 0;
        }
      });
  }

  abrirModalMotivo(modalMotivo, estadoCredito) {
    if (estadoCredito === 'Aprobado') {
      console.log('form', this.actualizarCreditoForm);
      this.submitted = true;
      if (this.actualizarCreditoForm.invalid) {
        console.log('invalid Form');
        return;
      }
    }
    this.motivo = '';
    this.estadoCredito = estadoCredito;
    this.modalService.open(modalMotivo, {
        centered: true,
        size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
      }
    );
  }

  cerrarModal() {
    this.modalService.dismissAll();
  }

  consumirAWS() {
    this._solicitudCreditosService.actualizarAWS().subscribe((info) => {
      console.log(info);
      this.obtenerSolicitudesCreditos();
    });
  }
}
