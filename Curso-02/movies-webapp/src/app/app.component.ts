import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  NgFor,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DatePipe,
    CurrencyPipe,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Datos de la pelicula';
  
  peliculas = [
    {
      titulo: 'Spider-Man',
      fechaLanzamiento: new Date(),
      precio: 1400.99
    },
    {
      titulo: 'Moana',
      fechaLanzamiento: new Date(),
      precio: 1350.99
    },
    {
      titulo: 'Ridick',
      fechaLanzamiento: new Date(),
      precio: 899.30
    },
    {
      titulo: 'I am leyent 2',
      fechaLanzamiento: new Date(),
      precio: 1680.50
    }
  ]


}
