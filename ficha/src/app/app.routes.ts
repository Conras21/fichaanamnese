import { Routes } from '@angular/router';
import { FichaComponent } from './ficha/ficha.component';
import { Ficha2Component } from './ficha2/ficha2.component';

export const routes: Routes = [
  { path: 'ficha', component: FichaComponent},
  { path: 'ficha2', component: Ficha2Component},
];
