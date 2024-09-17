import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class DataServices {
    constructor(
        private httpClient: HttpClient,
        private loginService: LoginService
    ) {}

    // Ahora tenemos que especificar los tipos a retornar
    cargarPersonas(): Observable<Persona[]>{
        const token = this.loginService.getIdToken();
        return this.httpClient.get<Persona[]>(`https://listado-personas-825ec-default-rtdb.firebaseio.com/datos.json?auth=${token}`);
    }


    // Guardar persona
    guardarPersonas(personas: Persona[]) {
        const token = this.loginService.getIdToken();
        this.httpClient
            .put(`https://listado-personas-825ec-default-rtdb.firebaseio.com/datos.json?auth=${token}`,personas)
            .subscribe({
                next: (response) => console.log('resultado guardar personas: ' + response),
                error: (error) => console.log('Error al guardar Personas: ' + error),
                complete: () => console.log('Petición completada con éxito'),
            });
    }

    modificarPersona(index: number, persona: Persona): void {
        const token = this.loginService.getIdToken();
        const url = `https://listado-personas-825ec-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`;
        this.httpClient.put(url, persona)
            .subscribe({
                next: (response) => console.log("Resultado modificar Persona: ", response),
                error: (error) => console.log("Error en modificar Persona: " + error),
                complete: () => console.log("Modificación completada")
            });
    }

    eliminarPersona(index: number): void {
        const token = this.loginService.getIdToken();
        const url = `https://listado-personas-825ec-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`;
        this.httpClient.delete(url)
            .subscribe({
                next: (response) => console.log("Resultado eliminar Persona: ", response),
                error: (error) => console.log("Error en eliminar Persona: " + error),
                complete: () => console.log("Eliminación completada")
            });
    }
}