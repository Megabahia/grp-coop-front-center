import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CoreMenuService} from '@core/components/core-menu/core-menu.service';
import {NgbModal, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as XLSX from 'xlsx-js-style';
import moment from 'moment';
import {RecargarLineaCreditosService} from '../../recargar-linea-creditos.service';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

type AOA = any[][];

@Component({
    selector: 'app-upload-lineas-creditos',
    templateUrl: './confirmar-recarga-lineas-creditos.component.html',
    styleUrls: ['./confirmar-recarga-lineas-creditos.component.scss']
})
export class ConfirmacionRecargarLineasCreditos implements OnInit, OnDestroy {
    @ViewChild('mensajeModal') mensajeModal;
    @ViewChild('confirmarModal') confirmarModal;
    @ViewChild(NgbPagination) paginator: NgbPagination;

    // public
    public page = 1;
    public page_size: any = 10;
    public collectionSize;
    public contentHeader: object;
    public submitted = false;
    public archivo = true;
    public nombreArchivo = 'Seleccionar archivo';
    public mensaje = '';
    public nuevoArchivo = new FormData();
    public usuarioForm: FormGroup;
    private _unsubscribeAll: Subject<any>;
    public listaEmpresasIfis;
    public numeroRegistros = 0;

    public empresa_comercial = '';
    public usuario;
    public cargandoUsuario = false;
    public listaRecargarLineasCredito = [];
    public inicio;
    public fin;
    public nombreEmpresa = '';
    public idEmpresa = '';

    constructor(
        private _cargarCreditosNegocios: RecargarLineaCreditosService,
        private _coreMenuService: CoreMenuService,
        private _formBuilder: FormBuilder,
        private modalService: NgbModal,
    ) {
        this._unsubscribeAll = new Subject();
        this.usuario = this._coreMenuService.grpCoopCenterUser;
    }

    get usuForm() {
        return this.usuarioForm.controls;
    }

    ngOnInit(): void {
        this.obtenerListaEmpresasIfis();
        this.obtenerListaRecargaLineasCredito();
        this.usuarioForm = this._formBuilder.group({
                empresaIfis_id: ['', [Validators.required]],
                empresaComercial_id: ['', [Validators.required]],
            }
        );
    }

    obtenerListaEmpresasIfis() {
        this._cargarCreditosNegocios.obtenerListaEmpresasIfis({}).subscribe((info) => {
            this.listaEmpresasIfis = info.info;
            this.nombreEmpresa = info.info[0].nombreEmpresa;
            this.idEmpresa = info.info[0]._id;
        });
    }

    obtenerListaRecargaLineasCredito() {
        this._cargarCreditosNegocios.obtenerListaRecargaLineasCredito({
            page_size: 10,
            page: 0,
            empresa_comercial: this.empresa_comercial,
            estado: ['Procesar'],
            tipoCredito: 'LineaCredito'
        }).subscribe((info) => {
            this.listaRecargarLineasCredito = info.info;
        });
    }

    cargarCreditos(event) {
        this.numeroRegistros = 0;
        const archivo = event.target.files[0];
        this.nuevoArchivo = new FormData();
        this.nuevoArchivo.append('documento', archivo, Date.now() + '_' + archivo.name);
        this.nombreArchivo = archivo.name;
        this.nuevoArchivo.append('empresa_financiera', this.idEmpresa);
        this.archivo = true;

        const target: DataTransfer = <DataTransfer>event.target;
        const data = [];
        if (target.files.length === 1) {
            const reader: FileReader = new FileReader();
            reader.onload = (e: any) => {
                /* read workbook */
                const bstr: string = e.target.result;
                const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

                /* grab first sheet */
                const wsname: string = wb.SheetNames[0];
                const ws: XLSX.WorkSheet = wb.Sheets[wsname];
                /* save data */
                data.push(<AOA>XLSX.utils.sheet_to_json(ws, {header: 1}));

                // Recuep
                // data[0].map((item, index) => {
                //   if (index > 0) {
                //     if(item[8] != this.empresaIfi.ruc){
                //       this.mensaje = "No coicide el ruc de la empresa Ifi con la seleccionada."
                //       this.abrirModal(this.mensajeModal);
                //     }
                //     console.log(item[8]);
                //   }
                // });
                this.numeroRegistros = data[0].length - 1;
            };
            reader.readAsBinaryString(target.files[0]);
        }
    }

    cargar() {
        this.usuarioForm['controls']['empresaIfis_id'].setValue(this.idEmpresa);
        this.submitted = true;
        if (!this.nuevoArchivo.get('documento')) {
            this.archivo = false;
            return;
        }
        this.mensaje = `Empresa IFIS: ${this.nombreEmpresa}<br>
                            <br>Registros: ${this.numeroRegistros} en el Excel ${this.nombreArchivo}`;
        this.abrirModal(this.confirmarModal);
    }

    guardar() {
        this.nuevoArchivo.delete('fechaCargaArchivo');
        this.nuevoArchivo.append('fechaCargaArchivo', String(moment().format('YYYY-MM-DD')));
        this.nuevoArchivo.delete('registrosCargados');
        this.nuevoArchivo.append('registrosCargados', String(this.numeroRegistros));
        this.nuevoArchivo.delete('usuarioCargo');
        this.nuevoArchivo.append('usuarioCargo', this.usuario.persona.nombres);
        this.nuevoArchivo.delete('user_id');
        this.nuevoArchivo.append('user_id', this.usuario.id);
        this.nuevoArchivo.append('tipoCredito', 'Negocio');
        this.nuevoArchivo.append('empresa_financiera', this.idEmpresa);
        /*this.nuevoArchivo.delete('empresa_comercial');
        this.nuevoArchivo.append('empresa_comercial', this.empresaIfi._id);*/
        this._cargarCreditosNegocios.recargarLineasCreditos(
            this.nuevoArchivo
        ).subscribe(info => {
            this.mensaje = `Se subio el excel correctamente.`;
            this.abrirModal(this.mensajeModal);
            this.obtenerListaRecargaLineasCredito();
        });
    }

    async negarRecargaLineaCredito(id, motivo) {
        if (motivo) {
            this._cargarCreditosNegocios.actualizarRecargaLinea({id, estado: 'Negado', observaciones: motivo}).subscribe(info => {
                this.obtenerListaRecargaLineasCredito();
                this.mensaje = 'Se nego correctamente.';
                this.abrirModal(this.mensajeModal);
            });
        }
    }

    procesarRecargaLineaCredito(id) {
        this._cargarCreditosNegocios.actualizarRecargaLinea({id, estado: 'Aprobado'}).subscribe(info => {
            this.obtenerListaRecargaLineasCredito();
            this.mensaje = 'Se guardo proceso';
            this.abrirModal(this.mensajeModal);
        });
    }

    verDatos(archivoId: number) {
        this._cargarCreditosNegocios.verDatosArchivosPreAprobados(archivoId).subscribe(info => {
            console.log(info[0][0]);
            // this.mensaje = `${info.mensaje} <br> correctos: ${info.correctos} <br>
            //             incorrectos: ${info.incorrectos} <br> errores: `;
            this.abrirModal(this.mensajeModal);
        });
    }

    download(url) {
        const downloadInicial = document.createElement('a');
        downloadInicial.href = url;
        downloadInicial.target = '_blank';
        downloadInicial.download = 'downloadFile';

        document.body.appendChild(downloadInicial);
        downloadInicial.click();
        document.body.removeChild(downloadInicial);
    }

    abrirModal(modal) {
        this.modalService.open(modal);
    }

    cerrarModal() {
        this.modalService.dismissAll();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
