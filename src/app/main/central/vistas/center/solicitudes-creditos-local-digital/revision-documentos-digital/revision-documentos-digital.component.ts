import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  }

  ngOnInit(): void {
  }

  completar() {
    this.pantalla.emit(2);
  }

}
