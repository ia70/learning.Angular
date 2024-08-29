import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrl: './personas.component.css'
})
export class PersonasComponent{
    mostrar = false;
    deshabilitar = false;
    mensaje = '';
    titulo= 'Ingeniero';

    agregarPersona(){
        this.mostrar = true;
        this.mensaje= 'Persona agregada'
    }
}