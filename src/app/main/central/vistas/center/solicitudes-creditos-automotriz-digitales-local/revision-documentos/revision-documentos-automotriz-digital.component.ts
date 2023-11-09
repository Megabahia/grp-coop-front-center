import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

/**
 * COOP
 * Center
 * Esta pantalla sirve para mostrar los requisitos de los creditos
 * Rutas:
 * No recibe ningun llamado de rutas
 */

@Component({
  selector: 'app-revision-documentos-center-automotriz-digital',
  templateUrl: './revision-documentos-automotriz-digital.component.html',
  styleUrls: ['./revision-documentos-automotriz-digital.component.scss']
})
export class RevisionDocumentosAutomotrizDigitalComponent implements OnInit {

  @Input() checks: string;
  @Output() pantalla = new EventEmitter<number>();

  public completado;

  constructor() {
    this.completado = false;
  }

  ngOnInit(): void {
  }

  completar() {
    this.pantalla.emit(2);
  }

}
