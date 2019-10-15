import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { ListSongsComponent } from './list-songs/list-songs.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { CaratulaComponent } from './caratula/caratula.component';
import { SearchPipe } from './pipes/search';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    PlaylistComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    MenuComponent,
    FooterComponent,
    RegisterComponent,
    ListSongsComponent,
    ReproductorComponent,
    ArtistasComponent,
    CaratulaComponent,
    SearchPipe,
    BibliotecaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents(null),
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
