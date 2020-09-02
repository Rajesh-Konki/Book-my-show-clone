import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieArtistService {
  private movieArtistUrl='/api/MovieArtist';
  constructor(private http:HttpClient) { }
  getArtistInfo(id:any){
   var url=this.movieArtistUrl+'/'+id;
    return this.http.get(url);
  }
}
