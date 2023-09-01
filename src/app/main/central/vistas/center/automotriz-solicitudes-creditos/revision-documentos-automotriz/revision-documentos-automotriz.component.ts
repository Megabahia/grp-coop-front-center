import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-revision-documentos-automotriz',
  templateUrl: './revision-documentos-automotriz.component.html',
  styleUrls: ['./revision-documentos-automotriz.component.scss']
})
export class RevisionDocumentosAutomotrizComponent implements OnInit {

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
