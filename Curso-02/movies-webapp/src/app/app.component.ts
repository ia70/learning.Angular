import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
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
    LowerCasePipe,
    UpperCasePipe,
    PercentPipe,
    DecimalPipe,
    TitleCasePipe,
    JsonPipe,
    SlicePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'movies-webapp';
}
