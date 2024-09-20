import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  @Output() SetNum1 = new EventEmitter<number>();
  @Output() SetNum2 = new EventEmitter<number>();
  @Output() Sumar = new EventEmitter();

  setNum1(event: Event) {
    this.SetNum1.emit(Number((<HTMLInputElement> event?.target).value));
  }

  setNum2(event: Event){
    this.SetNum2.emit(Number((<HTMLInputElement> event?.target).value));
  }

  getResultado(){
    this.Sumar.emit();
  }
}
