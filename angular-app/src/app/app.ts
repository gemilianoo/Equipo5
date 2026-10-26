import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gustavo } from './components/gustavo/gustavo'; 
import { MAguirre } from './components/m.aguirre/m.aguirre'; 
import { RominaComponent } from './components/romina-component/romina-component';
import { Valeria } from './components/valeria/valeria';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Gustavo, 
    MAguirre, 
    RominaComponent, 
    Valeria
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'angular-app';
}