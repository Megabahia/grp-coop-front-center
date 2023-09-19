import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CoreMenuService} from '@core/components/core-menu/core-menu.service';
import {NgbModal, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as XLSX from 'xlsx-js-style';
import moment from 'moment';
import {CargarCreditosNegociosDigitalService} from '../../cargar-creditos-negocios-digital.service';

type AOA = any[][];

@Component({
    selector: 'app-upload-lineas-creditos',
    templateUrl: './upload-lineas-creditos-digital.component.html',
    styleUrls: ['./upload-lineas-creditos-digital.component.scss']
})
export class UploadLineasCreditosDigitalComponent implements OnInit, OnDestroy {
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
    public listaEmpresasCorps;
    public listaEmpresasIfis;
    public numeroRegistros = 0;
    public empresaIfi;
    public empresaCorp;

    public empresa_comercial = '';
    public usuario;
    public cargandoUsuario = false;
    public listaArchivosPreAprobados = [];
    public inicio;
    public fin;
    public nombreEmpresa = '';
    public idEmpresa = '';

    constructor(
        private _cargarCreditosNegocios: CargarCreditosNegociosDigitalService,
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
        this.obtenerListaEmpresasCorp();
        this.obtenerListaEmpresasIfis();
        this.obtenerListaArchivosPreAprobados();
        this.usuarioForm = this._formBuilder.group({
                empresaIfis_id: ['', [Validators.required]],
                empresaComercial_id: ['', [Validators.required]],
            }
        );
    }

    obtenerListaEmpresasCorp() {
        this._cargarCreditosNegocios.obtenerListaEmpresasCorps({}).subscribe((info) => {
                this.listaEmpresasCorps = info.info;


            },
            (error) => {

            });
    }

    obtenerListaEmpresasIfis() {
        this._cargarCreditosNegocios.obtenerListaEmpresasIfis({}).subscribe((info) => {
                this.listaEmpresasIfis = info.info;
                this.nombreEmpresa = info.info[0].nombreEmpresa;
                this.idEmpresa = info.info[0]._id;

            },
            (error) => {

            });
    }

    obtenerListaArchivosPreAprobados() {
        this._cargarCreditosNegocios.obtenerListaArchivosPreAprobados({
            page_size: 10,
            page: 0,
            minimoCarga: this.inicio,
            maximoCarga: this.fin,
            minimoCreacion: '',
            maximaCreacion: '',
            user_id: '',
            campania: '',
            empresa_comercial: this.empresa_comercial,
            tipoCredito: 'Lineas Credito Digital'
        }).subscribe((info) => {
                this.listaArchivosPreAprobados = info.info;
            },
            (error) => {

            });
    }

    obtenerEmpresaIfi() {
        this.empresaIfi = this.listaEmpresasIfis.find((empresa) => empresa._id === this.usuarioForm.get('empresaIfis_id').value);
    }

    obtenerEmpresaCorp() {
        this.empresaCorp = this.listaEmpresasCorps.find((empresa) => empresa._id === this.usuarioForm.get('empresaComercial_id').value);
    }

    cargarCreditos(event) {
        this.numeroRegistros = 0;
        const archivo = event.target.files[0];
        this.nuevoArchivo = new FormData();
        this.nuevoArchivo.append('linkArchivo', archivo, archivo.name);
        this.nuevoArchivo.append('tamanioArchivo', String(archivo.size / (1000000)));
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
        console.log('subir arvhivo');
        if (!this.nuevoArchivo.get('linkArchivo')) {
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
        this.nuevoArchivo.append('tipoCredito', 'Lineas Credito Digital');
        this.nuevoArchivo.append('empresa_financiera', this.idEmpresa);
        /*this.nuevoArchivo.delete('empresa_comercial');
        this.nuevoArchivo.append('empresa_comercial', this.empresaIfi._id);*/
        this._cargarCreditosNegocios.crearArchivoPreAprobados(
            this.nuevoArchivo
        ).subscribe(info => {
            this.nombreArchivo = '';
            this.mensaje = `Se subio el excel correctamente.`;
            this.abrirModal(this.mensajeModal);
            this.obtenerListaArchivosPreAprobados();
        });
    }

    eliminarArchivoPreAprobado(id) {
        this._cargarCreditosNegocios.eliminarArchivosPreAprobados(id).subscribe(info => {
            this.obtenerListaArchivosPreAprobados();
            this.mensaje = 'Se elimino correctamente.';
            this.abrirModal(this.mensajeModal);
        });
    }

    subirArchivoPreAprobado(id) {
        this._cargarCreditosNegocios.subirArchivosPreAprobados(id).subscribe(info => {
            this.obtenerListaArchivosPreAprobados();
            this.mensaje = `${info.mensaje} <br> correctos: ${info.correctos} <br>
                        incorrectos: ${info.incorrectos} <br> errores: `;
            info.errores.map((item) => {
                this.mensaje += item.error + '<br>';
            });
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
