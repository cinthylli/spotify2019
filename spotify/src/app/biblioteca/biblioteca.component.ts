import { Component, OnInit } from '@angular/core';
import { Song } from '../interfaces/song';
import { CancionService } from '../services/cancion.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {
  cancionesBuscadas: Song[];
  query: string = '';
  constructor(private cancionService: CancionService) { 
    this.cancionesBuscadas = cancionService.getCanciones();
  }

  ngOnInit() {
  }

}
