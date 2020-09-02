import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieCommonUrl='/api/Movies';
  constructor(private http:HttpClient) { }
  url:string;
  getMovies(type:string){
    var url=this.movieCommonUrl+"?type="+type;
  return this.http.get(url);
  }
  getMovie(id:any){
    this.url=this.movieCommonUrl+'/'+id;
    try{
      return this.http.get(this.url);
    }
    catch(e){
    }
    }
}
