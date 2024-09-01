import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de Personas';
  nombreInput: string ='';
  apellidoInput: string ='';

  personas: Persona[] = [
    new Persona("Juan","Pérez"), 
    new Persona("Laura","Juarez"),
    new Persona("Carla", "Lara")
  ];

  agregarPersona(){
    this.personas.push(new Persona(this.nombreInput, this.apellidoInput));
  }
}
