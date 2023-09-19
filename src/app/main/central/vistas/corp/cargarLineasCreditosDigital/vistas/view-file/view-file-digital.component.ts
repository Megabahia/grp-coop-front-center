import {Component, OnInit} from '@angular/core';
import {CargarCreditosNegociosDigitalService} from '../../cargar-creditos-negocios-digital.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-view-file',
    templateUrl: './view-file-digital.component.html',
    styleUrls: ['./view-file-digital.component.scss']
})
export class ViewFileDigitalComponent implements OnInit {

    public cabecera = [];
    public filas = [];

    constructor(
        private _cargarCreditosNegocios: CargarCreditosNegociosDigitalService,
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
