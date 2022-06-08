import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  titulo = 'App Calculadora :)';
  opA: number = NaN;
  opB: number = NaN;
  resultado: number | string = '';
  constructor() {}

  ngOnInit(): void {}

  suma() {
    this.resultado = this.opA + this.opB;
  }
}
