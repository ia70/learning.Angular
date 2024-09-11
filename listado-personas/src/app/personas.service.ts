import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Pérez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Carla', 'Lara'),
  ];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService) {}

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola(
      'Agregamos persona: ' + persona.nombre
    );
    this.personas.push(persona);
  }

  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(indice: number, persona: Persona) {
    let persona1 = this.personas[indice];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(indice: number) {
       this.personas.splice(indice, 1);
  }
}
