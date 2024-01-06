import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SolicitudesCreditosDigitalService} from '../solicitudes-creditos-digital.service';

/**
 * COOP
 * CEnter
 * ESta pantalla sirve para mostrar el resumen de la solicitud de credito
 * Rutas:
 * `${environment.apiUrl}/corp/creditoPersonas/listOne/${id}`
 */

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen-digital.component.html',
  styleUrls: ['./resumen-digital.component.scss']
})
export class ResumenDigitalComponent implements OnInit {

  @Input() credito;
  @Output() pantalla = new EventEmitter<number>();
  public solicitudCredito;

  constructor(
    private _solicitudCreditosService: SolicitudesCreditosDigitalService,
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
