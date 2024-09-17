import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

@Injectable()
export class FirebaseService {
  private firebaseConfig = {
    apiKey: 'AIzaSyC42sHkjIKcQ92fv804w-hGdOoeLQM49bI',
    authDomain: 'listado-personas-cd6c1.firebaseapp.com',
    databaseURL: 'https://listado-personas-cd6c1-default-rtdb.firebaseio.com',
    projectId: 'listado-personas-cd6c1',
    storageBucket: 'listado-personas-cd6c1.appspot.com',
    messagingSenderId: '136831904588',
    appId: '1:136831904588:web:c28408262cb6fef6c17de9',
  };

  public auth: Auth;
  public db: Firestore;

  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.db = getFirestore(app);
  }
}
