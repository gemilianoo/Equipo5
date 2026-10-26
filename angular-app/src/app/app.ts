import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GustavoComponent } from './components/gustavo/gustavo.component';
import { MAguirreComponent } from './components/m.aguirre/m-aguirre.component';
import { RominaComponent } from './components/romina-component/romina.component'; // Ajusta la ruta si es necesario
import { ValeriaComponent } from './components/valeria/valeria.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    GustavoComponent, 
    MAguirreComponent, 
    RominaComponent, 
    ValeriaComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'angular-app';
}