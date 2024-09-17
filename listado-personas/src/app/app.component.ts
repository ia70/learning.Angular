import { Component, OnInit } from '@angular/core';
// Firebase Modular API (Versiones 9+)
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titulo = 'Listado de Personas';

  // Inicializa Firebase
  firebaseConfig = {
    apiKey: 'AIzaSyC42sHkjIKcQ92fv804w-hGdOoeLQM49bI',
    authDomain: 'listado-personas-cd6c1.firebaseapp.com',
    databaseURL: 'https://listado-personas-cd6c1-default-rtdb.firebaseio.com',
    projectId: 'listado-personas-cd6c1',
    storageBucket: 'listado-personas-cd6c1.appspot.com',
    messagingSenderId: '136831904588',
    appId: '1:136831904588:web:c28408262cb6fef6c17de9',
  };

  constructor(private loginService: LoginService){}

  app = initializeApp(this.firebaseConfig);
  db = getFirestore(this.app);
  auth = getAuth(this.app);

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }
}
