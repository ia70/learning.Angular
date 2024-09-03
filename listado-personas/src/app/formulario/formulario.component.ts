import {Component, ElementRef, EventEmitter, Output, ViewChild,} from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  providers: [LoggingService]
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private loggingService: LoggingService){}

  agregarPersona() {
    let persona: Persona;

    persona = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value);

    this.loggingService.enviaMensajeAConsola(
      "Enviamos persona: " + persona.nombre + " " + persona.apellido
    );

    this.personaCreada.emit(persona);
  }
}
