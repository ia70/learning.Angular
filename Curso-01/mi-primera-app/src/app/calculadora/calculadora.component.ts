import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  num1 = 0;
  num2 = 0;
  resultado = '';

  setNum1(event: Event){
    this.num1 = Number((<HTMLInputElement> event?.target).value);
  }

  setNum2(event: Event){
    this.num2 = Number((<HTMLInputElement> event?.target).value);
  }

  getResultado() {
    this.resultado = (this.num1 + this.num2).toString();
  }
}
