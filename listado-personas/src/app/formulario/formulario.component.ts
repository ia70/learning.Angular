import { Component} from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  nombreInput: string;
  apellidoInput: string;

  constructor(private personasService: PersonasService,) {
    personasService.saludar.subscribe(
      (indice: number) => alert("El indice es: " + indice)
    );
  }

  agregarPersona() {
    this.personasService.agregarPersona(new Persona(this.nombreInput, this.apellidoInput));
  }
}
