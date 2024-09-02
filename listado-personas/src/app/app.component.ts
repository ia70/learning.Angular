import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de Personas';

  personas: Persona[] = [
    new Persona("Juan","Pérez"), 
    new Persona("Laura","Juarez"),
    new Persona("Carla", "Lara")
  ];

  personaAgregada(persona: Persona){
    this.personas.push(persona);
  }
}
