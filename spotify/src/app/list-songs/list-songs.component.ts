import { Component, OnInit } from '@angular/core';
import { Song } from '../interfaces/song';
import { CancionService } from '../services/cancion.service';

@Component({
  selector: 'app-list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['./list-songs.component.scss']
})
export class ListSongsComponent implements OnInit {
  canciones: Song[];
  constructor(private cancionService: CancionService) { 
    this.canciones = cancionService.getCanciones();
  }

  ngOnInit() {
  }

}
