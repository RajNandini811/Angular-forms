import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: '',redirectTo: 'login',pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'headh', component: HeaderComponent },
  { path: 'movie', component: MovieComponent },
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
