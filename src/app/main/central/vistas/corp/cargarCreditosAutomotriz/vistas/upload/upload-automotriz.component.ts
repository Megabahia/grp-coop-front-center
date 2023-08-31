import {Component, OnInit, ViewChild} from '@angular/core';
import {CoreMenuService} from '@core/components/core-menu/core-menu.service';
import {NgbModal, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {CargarCreditosAutomotrizService} from '../../cargar-creditos-automotriz.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as XLSX from 'xlsx-js-style';
import moment from 'moment';

type AOA = any[][];

@Component({
    selector: 'app-upload',
    templateUrl: './upload-automotriz.component.html',
    styleUrls: ['./upload-automotriz.component.scss']
})
export class UploadAutomotrizComponent implements OnInit {
    @ViewChild('mensajeModal') mensajeModal;
    @ViewChild('confirmarModal') confirmarModal;
    @ViewChild(NgbPagination) paginator: NgbPagination;
    blockButton = false;

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

    public cantidadMonedas;
    public usuario;
    public cargandoUsuario = false;
    public listaArchivosPreAprobados = [];
    inicio;
    fin;
    public errores = false;
    public nombreEmpresa = '';
    public idEmpresa = '';

    constructor(
        private _cargarCreditosEmpleados: CargarCreditosAutomotrizService,
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
                empresaIfis_id: [this.idEmpresa, [Validators.required]],
                empresaComercial_id: ['', []],
            }
        );
    }

    obtenerListaEmpresasCorp() {
        this._cargarCreditosEmpleados.obtenerListaEmpresasCorps({}).subscribe((info) => {
                this.listaEmpresasCorps = info.info;
            },
            (error) => {

            });
    }

    obtenerListaEmpresasIfis() {
        this._cargarCreditosEmpleados.obtenerListaEmpresasIfis({}).subscribe((info) => {
                this.listaEmpresasIfis = info.info;
                this.nombreEmpresa = info.info[0].nombreEmpresa;
                this.idEmpresa = info.info[0]._id;
            },
            (error) => {

            });
    }

    obtenerListaArchivosPreAprobados() {
        this._cargarCreditosEmpleados.obtenerListaArchivosPreAprobados({
            page_size: 10,
            page: 0,
            minimoCarga: this.inicio,
            maximoCarga: this.fin,
            minimoCreacion: '',
            maximaCreacion: '',
            user_id: '',
            campania: '',
            tipoCredito: 'Credito Automotriz Empleado'
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
                const cedulas = data[0].slice(1).map((item) => {
                    return '' + item[8];
                });
                const duplicates = this.findDuplicateStringPositions(cedulas);
                if (duplicates.size > 0) {
                    this.mensaje = '';
                    duplicates.forEach((positions, item) => {
                        this.mensaje += `La cédula "${item}" se repite en las filas: ${positions.join(', ')}<br>`;
                    });
                    this.abrirModal(this.mensajeModal);
                    this.blockButton = true;
                } else {
                    this.blockButton = false;
                }
                this.numeroRegistros = data[0].length - 1;
            };
            reader.readAsBinaryString(target.files[0]);
        }
    }

    findDuplicateStringPositions(array) {
        const positions = new Map();
        const duplicatePositions = new Map();

        for (let i = 0; i < array.length; i++) {
            const item = array[i];

            if (positions.has(item)) {
                if (!duplicatePositions.has(item)) {
                    duplicatePositions.set(item, [positions.get(item)]);
                }
                duplicatePositions.get(item).push(i + 1);
            } else {
                positions.set(item, i + 1);
            }
        }

        return duplicatePositions;
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
        this.nuevoArchivo.delete('estado');
        this.nuevoArchivo.append('estado', 'Pendiente Carga');
        this.nuevoArchivo.delete('fechaCargaArchivo');
        this.nuevoArchivo.append('fechaCargaArchivo', String(moment().format('YYYY-MM-DD')));
        this.nuevoArchivo.delete('registrosCargados');
        this.nuevoArchivo.append('registrosCargados', String(this.numeroRegistros));
        this.nuevoArchivo.delete('usuarioCargo');
        this.nuevoArchivo.append('usuarioCargo', this.usuario.persona.nombres);
        this.nuevoArchivo.delete('user_id');
        this.nuevoArchivo.append('user_id', this.usuario.id);
        this.nuevoArchivo.append('tipoCredito', 'Credito Automotriz Empleado');
        this.nuevoArchivo.append('empresa_financiera', this.idEmpresa);
        // this.nuevoArchivo.delete('empresa_comercial');
        // this.nuevoArchivo.append('empresa_comercial', this.empresaCorp._id);
        this._cargarCreditosEmpleados.crearArchivoPreAprobados(
            this.nuevoArchivo
        ).subscribe(info => {
            this.nombreArchivo = '';
            this.mensaje = `Se subio el excel correctamente.`;
            this.abrirModal(this.mensajeModal);
            this.obtenerListaArchivosPreAprobados();
        });
    }

    eliminarArchivoPreAprobado(id) {
        this._cargarCreditosEmpleados.eliminarArchivosPreAprobados(id).subscribe(info => {
            this.obtenerListaArchivosPreAprobados();
            this.mensaje = 'Se elimino correctamente.';
            this.abrirModal(this.mensajeModal);
        });
    }

    subirArchivoPreAprobado(id) {
        this._cargarCreditosEmpleados.subirArchivosPreAprobados(id).subscribe(info => {
            this.obtenerListaArchivosPreAprobados();
            this.mensaje = `${info.mensaje} <br> correctos: ${info.correctos} <br>
                        incorrectos: ${info.incorrectos} <br> errores: `;
            info.errores.map((item) => {
                this.mensaje += item.error + '<br>';
            });
            if (info.errores.length > 0) {
                this.errores = true;
                this.mensaje += 'Algunos de los empleados a los que intenta precalificar a un crédito no se encuentran registrados, ' +
                    'por favor diríjase a la opción de menú CARGAR EMPLEADOS IFIS y registre a sus empleados para continuar.';
            }
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
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
