import { Routes } from '@angular/router';
import { HomeComponent } from './modules/portfolio/pages/home/home.component';
import { PageNotFoundComponent } from './modules/portfolio/pages/page-not-found-component/page-not-found-component.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: '**', 
    component: PageNotFoundComponent 
  }
];
