import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { AuthenticationGuard } from './services/authentication.guard';


const routes: Routes = [
  { path: '', component: HomeComponent , canActivate:[AuthenticationGuard]},
  { path: 'home', component: HomeComponent , canActivate:[AuthenticationGuard]},
  { path: 'login', component: LoginComponent , canActivate:[AuthenticationGuard]},
  { path: 'playlist', component: PlaylistComponent, canActivate:[AuthenticationGuard] },
  { path: 'profile', component: ProfileComponent , canActivate:[AuthenticationGuard]},
  { path:'biblioteca', component: BibliotecaComponent , canActivate:[AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
