import { Artist } from './artist';

export interface Album {
    _id?: string,
    titulo: string,
    descripcion: string,
    anio: number,
    artista: string,
    rutaImagen: string,
    __v: any,
}
