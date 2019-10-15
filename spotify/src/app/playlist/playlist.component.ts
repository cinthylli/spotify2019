import { Component, OnInit } from '@angular/core';
import { CancionService } from '../services/cancion.service';
import { Song } from '../interfaces/song';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  cancionesBuscadas: Song[];
  query: string = '';
  constructor(private cancionService: CancionService) { 
    this.cancionesBuscadas = cancionService.getCanciones();
  }

  ngOnInit() {
  }

}
