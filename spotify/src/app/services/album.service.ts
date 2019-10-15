import { Injectable } from '@angular/core';
import { Album } from '../interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums: Album[];
  constructor() { 
    this.albums = [
      {
        "_id": "5da3cfd705289b0eedef5b1d",
        "titulo": "Maroon cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e",
        "descripcion": "esta es la descripcion de Maroon 5",
        "anio": 2019,
        "artista": "5da38843e1edcc05fa0ca4a6",
        "rutaImagen": "uploads/15b2af39-8e11-4257-9073-e6cb9027e6ac.jpg",
        "__v": 0
      },
      {
        "_id": "5da3d01c05289b0eedef5b1e",
        "titulo": "Album 5",
        "descripcion": "esta es la descripcion de Album 5",
        "anio": 2019,
        "artista": "5da38843e1edcc05fa0ca4a6",
        "rutaImagen": "uploads/310a93e3-06da-4213-92c6-d7e31fd105af.jpg",
        "__v": 0
      },
      {
        "_id": "5da3d02905289b0eedef5b1f",
        "titulo": "Album 4",
        "descripcion": "esta es la descripcion de Album 4",
        "anio": 2019,
        "artista": "5da38843e1edcc05fa0ca4a6",
        "rutaImagen": "uploads/a96da802-5486-4217-acee-7895cfdf60c1.jpg",
        "__v": 0
      },
      {
        "_id": "5da3d03405289b0eedef5b20",
        "titulo": "Album 3",
        "descripcion": "esta es la descripcion de Album 3",
        "anio": 2019,
        "artista": "5da38843e1edcc05fa0ca4a6",
        "rutaImagen": "uploads/a12b4696-982d-48c3-8b6d-04de2dc37aca.jpg",
        "__v": 0
      },
      {
        "_id": "5da3d03f05289b0eedef5b21",
        "titulo": "Album 2",
        "descripcion": "esta es la descripcion de Album 2",
        "anio": 2019,
        "artista": "5da38843e1edcc05fa0ca4a6",
        "rutaImagen": "uploads/0b7bf303-2059-4018-b5a5-5e7b2bfbb67a.jpg",
        "__v": 0
      }
    ];
  }

  getAlbum() {
    return this.albums;
  }
}
