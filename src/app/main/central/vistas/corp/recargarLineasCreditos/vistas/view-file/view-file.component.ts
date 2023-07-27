import {Component, OnInit} from '@angular/core';
import {RecargarLineaCreditosService} from '../../recargar-linea-creditos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-view-file',
    templateUrl: './view-file.component.html',
    styleUrls: ['./view-file.component.scss']
})
export class ViewFileComponent implements OnInit {

    public cabecera = [];
    public filas = [];

    constructor(
        private _cargarCreditosNegocios: RecargarLineaCreditosService,
        private route: ActivatedRoute,
    ) {
        this.route.params.subscribe((params) => {
            const archivoId = params.archivoId;
            this._cargarCreditosNegocios.verDatosArchivosPreAprobados(archivoId).subscribe(info => {
                this.cabecera = info.shift();
                this.filas = info;
                console.log(this.cabecera);
                console.log(this.filas);
            });
        });
    }

    ngOnInit(): void {
    }

}
