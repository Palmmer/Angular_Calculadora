import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
})
export class PersonaComponent implements OnInit {
  nombre: string = 'Juan';
  apellido: string = ' perez';
  edad: number = 28;

  constructor() {}

  ngOnInit(): void {}
}
