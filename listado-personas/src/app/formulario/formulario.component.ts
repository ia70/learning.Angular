import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private personasService: PersonasService) {}

  agregarPersona() {
    let persona: Persona;
    persona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    
    this.personasService.agregarPersona(persona);
  }
}
