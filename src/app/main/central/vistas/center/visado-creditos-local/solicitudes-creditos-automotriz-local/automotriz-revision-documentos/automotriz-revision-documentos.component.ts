import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

/**
 * COOP
 * Center
 * Esta pantalla sirve para mostrar los requisitos de los creditos
 * Rutas:
 * No recibe ningun llamado de rutas
 */

@Component({
  selector: 'app-automotriz-revision-documentos-local',
  templateUrl: './automotriz-revision-documentos.component.html',
  styleUrls: ['./automotriz-revision-documentos.component.scss']
})
export class AutomotrizRevisionDocumentosComponent implements OnInit {

  @Input() checks: any;
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
