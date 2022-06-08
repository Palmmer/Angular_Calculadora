import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
})
export class PersonasComponent implements OnInit {
  deshabilitar = false;
  persona: string = 'No se agrego una persona';
  titulo: string = 'Hola';

  constructor() {}

  ngOnInit(): void {}

  agregar() {
    // this.deshabilitar = true;
    this.persona = 'Se agrego una persona';
  }

  modificarTitulo(event: Event) {
    this.titulo = (<HTMLInputElement>event.target).value;
  }
}
