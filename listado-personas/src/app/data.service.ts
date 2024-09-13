import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  private url: string =
    'https://listado-personas-cd6c1-default-rtdb.firebaseio.com/datos';

  constructor(private httpClient: HttpClient) {}

  cargarPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url + '.json');
  }

  guardarPersonas(personas: Persona[]): void {
    this.httpClient.put(this.url + '.json', personas).subscribe({
      next: (response) =>
        console.log('Resultado de guardar Personas: ', response),
      error: (error) => console.log('Error al guardar Personas: ', error),
      complete: () => console.log('Petición completada con éxito'),
    });
  }

  modificarPersona(index: number, persona: Persona): void {
    this.httpClient.put(this.url + '/' + index + '.json', persona).subscribe({
      next: (response) =>
        console.log('Resultado modificar Persona: ', response),
      error: (error) => console.log('Error en modificar Persona: ', error),
      complete: () => console.log('Modificación completada'),
    });
  }

  eliminarPersona(index: number): void {
    this.httpClient.delete(this.url + '/' + index + '.json').subscribe({
      next: (response) =>
        console.log('Resultado de eliminar Persona: ', response),
      error: (error) => console.log('Error en eliminar Persona: ', error),
      complete: () => console.log('Eliminación completada'),
    });
  }
}
