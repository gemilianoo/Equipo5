
import { Routes } from '@angular/router';
import { Nombre } from './components/nombre/nombre';
import { Romina } from './components/romina/romina';
import { Rocamontes } from './components/rocamontes/rocamontes';
import { Aguirre } from './components/aguirre/aguirre';
import { Sanchez } from './components/sanchez/sanchez';
import { Arroyo } from './components/arroyo/arroyo';

export const routes: Routes = [
  { path: '', redirectTo: 'lucas', pathMatch: 'full' },
  { path: 'lucas', component: Nombre },
  { path: 'romina', component: Romina },
  { path: 'rocamontes', component: Rocamontes },
  { path: 'aguirre', component: Aguirre },
  { path: 'sanchez', component: Sanchez },
  { path: 'arroyo', component: Arroyo }
];


