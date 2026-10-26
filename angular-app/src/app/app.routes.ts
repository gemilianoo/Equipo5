import { Routes } from '@angular/router';
import { Gustavo } from './components/gustavo/gustavo';
import { MAguirre } from './components/m.aguirre/m.aguirre';
import { RominaComponent } from './components/romina-component/romina-component';
import { Valeria } from './components/valeria/valeria';

export const routes: Routes = [
  { path: 'gustavo', component: Gustavo },
  { path: 'm-aguirre', component: MAguirre },
  { path: 'romina', component: RominaComponent },
  { path: 'valeria', component: Valeria },
  { path: '', redirectTo: 'gustavo', pathMatch: 'full' }
];