import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { Artist } from '../interfaces/artist';
import { Album } from '../interfaces/album';
import { ArtistaService } from '../services/artista.service';
import { AlbumService } from '../services/album.service';
import { Song } from '../interfaces/song';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  artistas: Artist[];
  albums: Album[];
  canciones: Song[];
  constructor(private artistaService: ArtistaService,
    private albumService: AlbumService) {    
    this.artistas = artistaService.getArtist();
    
    this.albums = albumService.getAlbum();

  }
    
  ngOnInit() {
  }


}
