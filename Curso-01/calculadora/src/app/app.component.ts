import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aplicación de Calculadora';
  num1: number;
  num2: number;
  resultado: number;

  setNum1(Num1: number){
    this.num1 = Num1;
  }

  setNum2(Num2: number){
    this.num2 = Num2;
  }
  
  sumar(){
    this.resultado = this.num1 + this.num2;
  }
}
