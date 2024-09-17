import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService){}

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }
}
