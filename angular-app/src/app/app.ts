import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // <--- ¡Esto es lo que hace que los botones funcionen!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'angular-app';
}