import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  nombreInput: string;
  apellidoInput: string;
  index: number;
  modoEdicion: number;

  constructor(
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    personasService.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + indice)
    );
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    if (this.modoEdicion != null && this.modoEdicion === 1) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona() {
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      this.personasService.modificarPersona(this.index, persona);
    } else {
      this.personasService.agregarPersona(persona);
    }

    this.router.navigate(['personas']);
  }

  eliminarPersona() {
    if (this.index != null) {
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
