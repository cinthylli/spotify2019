import { Injectable } from '@angular/core';
import { Song } from '../interfaces/song';

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  songs: Song[];
  constructor() { 
    this.songs = [
      {
        "title": "Hijo de la luna",
        "artist": "Mecano",
        "duration": 5,
        "followers": 231,
        "album": "Album 1",
        "date": "8/2/2019"
      },
      {
        "title": "A Dios le pido",
        "artist": "�Juanes",
        "duration": 2,
        "followers": 26,
        "album": "Album 2",
        "date": "8/15/2010"
      },
      {
        "title": "No me doy por vencido",
        "artist": "Luis Fonsi",
        "duration": 2,
        "followers": 103,
        "album": "Album 3",
        "date": "4/20/1999"
      },
      {
        "title": "Coraz�n part�o",
        "artist": "Alejandro Sanz",
        "duration": 4,
        "followers": 337,
        "album": "Album 4",
        "date": "10/2/1964"
      }
    ]
  }

  getCanciones() {
    return this.songs;
  }

}
