import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SolicitudesCreditosAutomotrizDigitalService} from '../solicitudes-creditos-automotriz-digital.service';

@Component({
  selector: 'app-resumen-automotriz-digital',
  templateUrl: './resumen-automotriz-digital.component.html',
  styleUrls: ['./resumen-automotriz-digital.component.scss']
})
export class ResumenAutomotrizDigitalComponent implements OnInit {

  @Input() credito;
  @Output() pantalla = new EventEmitter<number>();
  public solicitudCredito;

  constructor(
    private _solicitudCreditosService: SolicitudesCreditosAutomotrizDigitalService,
  ) { }

  ngOnInit(): void {
    this._solicitudCreditosService.obtenersolicitudCredito(this.credito._id).subscribe((info) => {
      this.solicitudCredito = info;
    });
  }

  cambiarPantalla() {
    this.pantalla.emit(0);
  }

}
