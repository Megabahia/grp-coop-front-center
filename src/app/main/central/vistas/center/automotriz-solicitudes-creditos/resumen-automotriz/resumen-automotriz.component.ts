import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SolicitudesCreditosAutomotrizService} from '../solicitudes-creditos-automotriz.service';

/**
 * COOP
 * CEnter
 * ESta pantalla sirve para mostrar el resumen de la solicitud de credito
 * Rutas:
 * `${environment.apiUrl}/corp/creditoPersonas/listOne/${id}`
 */

@Component({
  selector: 'app-resumen-automotriz',
  templateUrl: './resumen-automotriz.component.html',
  styleUrls: ['./resumen-automotriz.component.scss']
})
export class ResumenAutomotrizComponent implements OnInit {

  @Input() credito;
  @Output() pantalla = new EventEmitter<number>();
  public solicitudCredito;

  constructor(
    private _solicitudCreditosService: SolicitudesCreditosAutomotrizService,
  ) {
  }

  ngOnInit(): void {
    this._solicitudCreditosService.obtenersolicitudCredito(this.credito._id).subscribe((info) => {
      this.solicitudCredito = info;
    });
  }

  cambiarPantalla() {
    this.pantalla.emit(0);
  }

}
