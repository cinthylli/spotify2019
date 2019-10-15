import { Component, OnInit } from '@angular/core';
import { Artist } from '../interfaces/artist';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {
  artistas: Artist[];
  constructor() {
    this.artistas = [
      {
        "_id": "5da3d16905289b0eedef5b26",
        "nombre": "Roberto Carlos",
        "descripcion": "Es un cantante antiguo",
        "rutaImagen": "uploads/da19c81c-d528-440b-b5a8-919054b58ec8.jpg",
       
      },
      {
        "_id": "5da3d18305289b0eedef5b27",
        "nombre": "Manuel Medrano",
        "descripcion": "Es un cantante antiguo",
        "rutaImagen": "uploads/73868d62-ff16-43c5-9763-c8374bb97fe9.jpg",
        
      },
      {
        "_id": "5da3d18b05289b0eedef5b28",
        "nombre": "Miguel Bose",
        "descripcion": "Es un cantante antiguo",
        "rutaImagen": "uploads/4e266c41-1252-4756-ac9a-2bb186d775a7.jpg",
        
      }
    ];

   }

  ngOnInit() {
  }

}
