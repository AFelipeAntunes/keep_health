import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppShellComponent } from './app-shell/app-shell.component';
import { DietComponent } from './diet/diet.component';
import { DietDetailComponent } from './diet/diet-detail/diet-detail.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: 'inicio', component: HomeComponent },
      { path: 'dietas', component: DietComponent },
      { path: 'dietas/:id', component: DietDetailComponent },
      { path: 'perfil', component: ProfileComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];