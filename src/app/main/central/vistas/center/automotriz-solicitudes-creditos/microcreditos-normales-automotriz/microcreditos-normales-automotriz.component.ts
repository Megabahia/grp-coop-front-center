import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SolicitudesCreditosAutomotrizService} from '../solicitudes-creditos-automotriz.service';
import {CoreSidebarService} from '../../../../../../../@core/components/core-sidebar/core-sidebar.service';
import {DatePipe} from '@angular/common';

/**
 * COOP
 * Center
 * ESta pantalla sirve para listar los creditos microcreditos
 * Rutas:
 * `${environment.apiUrl}/corp/creditoPersonas/list/`,
 * `${environment.apiUrl}/corp/creditoPersonas/update/${datos.get('id')}`,
 * `${environment.apiUrl}/corp/creditoPersonas/pruebaConsumer`
 * `${environment.apiUrl}/corp/empresas/list/comercial`,
 * `${environment.apiUrl}/corp/creditoPersonas/update/${datos._id}`,
 * `${environment.apiUrl}/corp/creditoPersonas/update/${datos._id}`,
 */

@Component({
  selector: 'app-microcreditos-normales',
  templateUrl: './microcreditos-normales-automotriz.component.html',
  styleUrls: ['./microcreditos-normales-automotriz.component.scss'],
  providers: [DatePipe],

})
export class MicrocreditosNormalesAutomotrizComponent implements OnInit, AfterViewInit {

  @ViewChild(NgbPagination) paginator: NgbPagination;
  public page = 1;
  public page_size: any = 4;
  public maxSize;
  public empresa;
  public collectionSize;
  public formSolicitud: FormGroup;
  public formConyuge: FormGroup;
  public casado = false;
  // Variables
  public listaCreditos;
  public userViewData;
  public referenciasSolicitante;
  public ingresosSolicitante;
  public gastosSolicitante;
  public pantalla = 0;
  public credito;
  public checks = [];
  public checksSolteroInferior: any = [];
  public checksSolteroSuperior: any = [];
  public checksCasadoInferior: any = [];
  public checksCasadoSuperior: any = [];
  public montoLimite: any = 8000;
  public remover = ['buroCredito', 'evaluacionCrediticia', 'identificacion', 'papeletaVotacion',
    'identificacionConyuge', 'mecanizadoIess', 'papeletaVotacionConyuge', 'planillaLuzNegocio',
    'planillaLuzDomicilio', 'facturas', 'matriculaVehiculo', 'impuestoPredial', 'fotoCarnet',
    'solicitudCredito', 'buroCreditoIfis', 'facturasVentas2meses', 'facturasVentasCertificado', 'facturasPendiente'];
  // Formulario
  public soltero = false;
  public actualizarCreditoForm: FormGroup;
  public submitted = false;
  public cargando = false;
  public actualizarCreditoFormData;
  public estadoCredito: string;
  public motivo: string;
  public ingresoNegocioSuperior = false;

  constructor(
    private _solicitudCreditosService: SolicitudesCreditosAutomotrizService,
    private modalService: NgbModal,
    private _coreSidebarService: CoreSidebarService,
    private _formBuilder: FormBuilder,
    private datePipe: DatePipe,
  ) {
    this._solicitudCreditosService.obtenerRequisitosCreditoPreAprobado({tipo: 'MICROCREDITO_CASADO_UNION_LIBRE'}).subscribe((item) => {
      item.map((fila) => {
        if (fila.valor === 'INFERIOR') {
          this.checksCasadoInferior = fila.config.map((index) => {
            return {'label': index, 'valor': false};
          });
        }
        if (fila.valor === 'SUPERIOR') {
          this.checksCasadoSuperior = fila.config.map((index) => {
            return {'label': index, 'valor': false};
          });
        }
      });
    });
    this._solicitudCreditosService.obtenerRequisitosCreditoPreAprobado({tipo: 'MICROCREDITO_SOLTERO_DIVORCIADO'}).subscribe((item) => {
      item.map((fila) => {
        if (fila.valor === 'INFERIOR') {
          this.checksSolteroInferior = fila.config.map((index) => {
            return {'label': index, 'valor': false};
          });
        }
        if (fila.valor === 'SUPERIOR') {
          this.checksSolteroSuperior = fila.config.map((index) => {
            return {'label': index, 'valor': false};
          });
        }
      });
    });
    this._solicitudCreditosService.obtenerParametroNombreTipo('MONTO', 'REQUISITOS_MICROCREDIOS').subscribe((item) => {
      this.montoLimite = item.valor;
    });
  }

  ngOnInit(): void {
    this.declareFormularios();
  }

  declareFormularios() {
    this.formSolicitud = this._formBuilder.group(
      {
        reprsentante: ['', [Validators.required]], //
        rucEmpresa: ['', [Validators.required]], //
        comercial: ['', [Validators.required]], //
        actividadEconomica: ['', [Validators.required]], //
        direccionDomiciolRepresentante: ['', [Validators.required]], //
        direccionEmpresa: ['', [Validators.required]], //
        referenciaDomicilio: ['', [Validators.required]], //
        refenciaNegocio: ['', [Validators.required]], //
        esatdo_civil: ['', [Validators.required]], //
        correo: ['', [Validators.required]], //
        telefono: ['', [Validators.required]], //
        celular: ['', [Validators.required]], //
        conyuge: this._formBuilder.group({
          nombreConyuge: [''], //
          telefonoConyuge: [''], //
          correoConyuge: [''],
        }),
        familiares: this._formBuilder.array([]),
        comerciales: this._formBuilder.array([
          this._formBuilder.group({
            nombresDuenoComercial: [''],
            negocioDuenoComercial: [''],
            telefonoDuenoComercial: [''],
            direccionDuenoComercial: [''],
          }),
          this._formBuilder.group({
            nombresDuenoComercial: [''],
            negocioDuenoComercial: [''],
            telefonoDuenoComercial: [''],
            direccionDuenoComercial: [''],
          }),
          this._formBuilder.group({
            nombresDuenoComercial: [''],
            negocioDuenoComercial: [''],
            telefonoDuenoComercial: [''],
            direccionDuenoComercial: [''],
          }),
        ]),
        inresosMensualesVentas: ['', [Validators.required]], //
        sueldoConyuge: [''], //
        otrosIngresos: [''], //
        totalIngresos: [''],
        gastosMensuales: ['', [Validators.required]], //
        gastosFamilaires: ['', [Validators.required]], //
        especificaIngresos: [''], //
        totalEgresos: [''],
      });
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

  abrirModalMotivo(modalMotivo, estadoCredito) {
    if (estadoCredito === 'Aprobado') {
      this.submitted = true;
      if (this.actualizarCreditoForm.invalid) {
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

  obtenerSolicitudesCreditos() {
    this._solicitudCreditosService.obtenerSolicitudesCreditos({
      page_size: this.page_size,
      page: this.page - 1,
      tipoCredito: 'Credito Automotriz Pymes-Normales',
      cargarOrigen: 'BIGPUNTOS',
      alcance: ['LOCAL', 'OMNIGLOBAL'],
      enviado: 1,
    }).subscribe(info => {
      this.collectionSize = info.cont;
      this.listaCreditos = info.info;
    });
  }

  declareFormConyuge() {
    this.formConyuge = this._formBuilder.group({
      nombreConyuge: [''], //
      telefonoConyuge: [''], //
      correoConyuge: [''],
    });
  }

  get controlsContuge() {
    return this.formSolicitud.controls['conyuge'] as FormGroup;
  }

  viewDataUser(modal, empresa) {
    const infoEmpresa = empresa;
    this.empresa = infoEmpresa;
    this.declareFormularios();
    this.declareFormConyuge();
    this.modalOpenSLC(modal);
    this.soltero = (infoEmpresa.esatdo_civil === 'Solter@' || infoEmpresa.esatdo_civil === 'Soltero' ||
      infoEmpresa.estadoCivil === 'Solter@' || infoEmpresa.estadoCivil === 'Divorciado' ||
      infoEmpresa.esatdo_civil === 'Divorciad@' || infoEmpresa.esatdo_civil === 'Divorciado');
    infoEmpresa?.familiares.forEach(item => this.agregarFamiliar());
    this.formSolicitud.patchValue({...infoEmpresa});
    // this.formConyuge.patchValue({...infoEmpresa.conyuge});
    // this.referenciasSolicitante = JSON.parse(empresa.referenciasSolicitante);
    // this.ingresosSolicitante = JSON.parse(empresa.ingresosSolicitante);
    // this.gastosSolicitante = JSON.parse(user.gastosSolicitante);
  }

  get familiares() {
    return this.formSolicitud.controls['familiares'] as FormArray;
  }

  agregarFamiliar() {
    const cuentaForm = this._formBuilder.group({
      nombreFamiliar: [''], //
      apellidoFamiliar: [''], //
      telefonoFamiliar: [''], //
      pais: [''],
      provincia: [''],
      ciudad: [''],
      direccionFamiliar: [''],
      tipoPariente: [''],
    });
    this.familiares.push(cuentaForm);
  }

  verDocumentos(credito) {
    this.credito = credito;
    this.submitted = false;
    this.actualizarCreditoFormData = new FormData();
    this.pantalla = 1;
    this.soltero = (credito.empresaInfo.esatdo_civil === 'Solter@' || credito.empresaInfo.esatdo_civil === 'Soltero' ||
      credito.user.estadoCivil === 'Solter@' || credito.user.estadoCivil === 'Divorciado' ||
      credito.empresaInfo.esatdo_civil === 'Divorciad@' || credito.empresaInfo.esatdo_civil === 'Divorciado');
    this.ingresoNegocioSuperior = (credito.monto >= this.montoLimite);
    this.actualizarCreditoForm = this._formBuilder.group(
      {
        id: [credito._id, [Validators.required]],
        solicitudCredito: ['', [Validators.required]], //
        evaluacionCrediticia: ['', [Validators.required]], //
        codigoClienteCreado: [this.credito.codigoClienteCreado ? this.credito.codigoClienteCreado : '', [Validators.required]], //
        codigoCuentaCreada: [this.credito.codigoCuentaCreada ? this.credito.codigoCuentaCreada : '', [Validators.required]], //
        buroCreditoIfis: ['', [Validators.required]], //
        calificacionBuroIfis: [this.credito.calificacionBuroIfis ? this.credito.calificacionBuroIfis : '',
          [Validators.required, Validators.minLength(3), Validators.maxLength(4), Validators.pattern('^[0-9]*$')]
        ],
        calificacionBuro: [this.credito.calificacionBuro ? this.credito.calificacionBuro : '', [Validators.required]], //
        // fotoCarnet: ['', [Validators.required]], //
        // papeletaVotacion: ['', [Validators.required]], //
        // identificacionConyuge: ['', [Validators.required]], //
        // papeletaVotacionConyuge: ['', [Validators.required]], //
        // planillaLuzDomicilio: ['', [Validators.required]], //
        // planillaLuzNegocio: ['', [Validators.required]], //
        // facturasVentas2meses: ['', [Validators.required]], //
        // facturasVentasCertificado: ['', [Validators.required]], //
        // facturasPendiente: ['', [Validators.required]], //
        // matriculaVehiculo: [''], //
        // impuestoPredial: [''], //
        // buroCredito: ['', [Validators.required]], //
        // observacion: [this.credito.observacion ? this.credito.observacion : '', [Validators.required]], //
        // checks
        checkIdentificacion: ['', [Validators.requiredTrue]], //
        checkRuc: ['', [Validators.requiredTrue]], //
        checkFotoCarnet: ['', [Validators.requiredTrue]], //
        checkPapeletaVotacion: ['', [Validators.requiredTrue]], //
        checkIdentificacionConyuge: ['', this.soltero ? [] : [Validators.requiredTrue]], //
        checkPapeletaVotacionConyuge: ['', this.soltero ? [] : [Validators.requiredTrue]], //
        checkPlanillaLuzDomicilio: ['', [Validators.requiredTrue]], //
        checkPlanillaLuzNegocio: ['', [Validators.requiredTrue]], //
        checkfacturasVentas2meses: ['', [Validators.requiredTrue]], //
        checkfacturasVentas2meses2: ['', [Validators.requiredTrue]], //
        checkfacturasVentas2meses3: ['', [Validators.requiredTrue]], //
        checkfacturasVentasCertificado: ['', credito.facturasVentasCertificado !== null ? [Validators.requiredTrue] : []], //
        checkFacturasPendiente: ['', [Validators.requiredTrue]], //
        checkMatriculaVehiculo: [''], //
        checkImpuestoPredial: [''], //
        // checkBuroCredito: ['', [Validators.requiredTrue]], //
        // checkObservacion: ['', [Validators.requiredTrue]], //
        checkSolicitudCredito: ['', [Validators.requiredTrue]], //
        checkEvaluacionCrediticia: ['', [Validators.requiredTrue]], //
        checkCodigoClienteCreado: ['', [Validators.requiredTrue]], //
        checkCodigoCuentaCreada: ['', [Validators.requiredTrue]], //
        checkBuroCreditoIfis: ['', [Validators.requiredTrue]], //
        checkCalificacionBuroIfis: ['', [Validators.requiredTrue]], //
        checkBuroCreditoGRP: ['', [Validators.requiredTrue]], //
        checkCalificacionBuro: ['', [Validators.requiredTrue]], //
      });
    if (typeof credito.checks === 'object') {
      if (this.soltero) {
        this.checks = this.ingresoNegocioSuperior ? this.checksSolteroSuperior : this.checksSolteroInferior;
      } else {
        this.checks = this.ingresoNegocioSuperior ? this.checksCasadoSuperior : this.checksCasadoInferior;
      }
    } else {
      this.checks = JSON.parse(credito.checks);
    }
  }

  cambiarEstado($event) {
    this.pantalla = $event;
    this.obtenerSolicitudesCreditos();
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
    this.submitted = true;
    if (this.estadoCredito !== 'Por Completar' && this.estadoCredito !== 'Negado') {
      if (this.actualizarCreditoForm.invalid) {
        return;
      }
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

    creditoLlaves.map((llaves, index) => {
      if (creditoValores[index] && !this.remover.find((item: any) => item === creditoLlaves[index])) {
        this.actualizarCreditoFormData.delete(llaves);
        this.actualizarCreditoFormData.append(llaves, creditoValores[index]);
      }
    });
    this.checks = [
      {'label': 'identificacion', 'valor': resto.checkIdentificacion},
      {'label': 'Foto Carnet', 'valor': resto.checkFotoCarnet},
      {'label': 'Ruc', 'valor': resto.checkRuc},
      {'label': 'Papeleta votación Representante Legal ', 'valor': resto.checkPapeletaVotacion},
      {'label': 'Identificacion conyuge', 'valor': resto.checkIdentificacionConyuge},
      {'label': 'Papeleta votacion conyuge', 'valor': resto.checkPapeletaVotacionConyuge},
      {'label': 'Planilla luz Domicilio', 'valor': resto.checkPlanillaLuzDomicilio},
      {'label': 'Planilla luz Negocio', 'valor': resto.checkPlanillaLuzNegocio},
      {'label': 'Copia de factura de venta del ultimo mes', 'valor': resto.checkfacturasVentas2meses},
      {
        'label': 'Copia de factura de venta del penúltimo mes (hace dos meses)',
        'valor': resto.checkfacturasVentas2meses2
      },
      {'label': 'Copia de factura del antepenúltimo mes (hace tres meses)', 'valor': resto.checkfacturasVentas2meses3},
      {
        'label': 'Certificado de la Asociación (este campo aplica si usted es transportista: Bus o Taxi)',
        'valor': resto.checkfacturasVentasCertificado
      },
      {'label': 'Facturas pendiente de pago', 'valor': resto.checkFacturasPendiente},
      {'label': 'Justificación otros ingresos mensuales ', 'valor': resto.checkMatriculaVehiculo}, // no hay
      {'label': 'Matricula vehiculo', 'valor': resto.checkMatriculaVehiculo},
      {'label': 'Copia de pago impuesto predial o copia de escrituras', 'valor': resto.checkImpuestoPredial},
      {'label': 'Registro de Referencias Familiares y Comerciales.', 'valor': resto.checkImpuestoPredial}, // no hay
      {'label': 'Buro credito', 'valor': resto.checkBuroCredito},
    ];
    if (this.soltero) {
      this.checks.splice(3, 2);
    }
    this.cargando = true;
    if (this.estadoCredito === 'Negado' || this.estadoCredito === 'Por Completar') {
      this.actualizarCreditoFormData.delete('estado');
      this.actualizarCreditoFormData.append('estado', this.estadoCredito);
    }
    this.actualizarCreditoFormData.delete('motivo');
    this.actualizarCreditoFormData.append('motivo', this.motivo);
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

    creditoLlaves.map((llaves, index) => {
      if (creditoValores[index] && !this.remover.find((item: any) => item === creditoLlaves[index])) {
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

  consumirAWS() {
    this._solicitudCreditosService.actualizarAWS().subscribe((info) => {
      this.obtenerSolicitudesCreditos();
    });
  }
}
