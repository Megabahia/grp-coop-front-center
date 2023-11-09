import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

/**
 * COOP
 * CEnter
 * ESta pantalla sirve para mostrar el resumen de la solicitud de credito
 * Rutas:
 * `${environment.apiUrl}/corp/creditoPersonas/listOne/${id}`
 */

@Component({
  selector: 'app-revision-documentos-digital',
  templateUrl: './revision-documentos-digital.component.html',
  styleUrls: ['./revision-documentos-digital.component.scss']
})
export class RevisionDocumentosDigitalComponent implements OnInit {

  @Input() checks: string;
  @Output() pantalla = new EventEmitter<number>();

  public completado;

  constructor() {
    this.completado = false;
    console.log('cjesks', this.checks);
  }

  ngOnInit(): void {
  }

  completar() {
    this.pantalla.emit(2);
  }

}
