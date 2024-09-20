import { Component } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  public tipo: string = 'ingresoOperacion';
  public descripcionInput: string;
  public valorInput: number;

  constructor(
    private ingresoService:IngresoService, 
    private egresoService: EgresoService){}

  tipoOperacion(evento: Event) {
    const target = evento.target as HTMLSelectElement;
    this.tipo = target.value;
  }

  agregarValor(){
    if(this.tipo === "ingresoOperacion")
      this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    else
      this.egresoService.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
  }
}
