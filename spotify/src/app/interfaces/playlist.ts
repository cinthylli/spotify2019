import { Song } from './song';
export interface Playlist{
    name: string;
    description: string;
    followers: string;
    arrSongs: Song[];
    duration: number;
    author: string;
    qty: string;

}