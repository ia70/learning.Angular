import { Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [new Persona('Juan', 'Pérez'), new Persona('Laura', 'Juarez'), new Persona('Carla', 'Lara'),];

  constructor(private loggingService: LoggingService){}

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola("Agregamos persona: " + persona.nombre);
    this.personas.push(persona);
  }
}
