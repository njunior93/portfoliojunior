import { Routes } from '@angular/router';
import { HomeComponent } from './modules/portfolio/pages/home/home.component';
import { PageNotFoundComponent } from './modules/portfolio/pages/page-not-found-component/page-not-found-component.component';
import { ExperienciasComponent } from './modules/portfolio/pages/experiencias/experiencias.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'experiencias', component: ExperienciasComponent },
  { path: '**', component: PageNotFoundComponent },
];
