import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'search'
})

export class SearchPipe implements PipeTransform {
    public transform(songList, searchString: string) {
        if (!songList) {
            //Si viene el arreglo de canciones vacio
            return;
        }
        if (!searchString) {
            // Si no tecleas nada en la barra de busqueda muestra todas las canciones
            return songList;
        }
        // Convierte la palabra buscada en minusculas
        searchString = searchString.toLowerCase();
        
        // Para cada cancion en SongList va a convertila en minusculas y con
        // includes va a mirar si coincide 
        return songList.filter((cancion) => {
            return JSON.stringify(cancion).toLowerCase().includes(searchString);
        })
    }
}