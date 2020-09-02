import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  url="https://localhost:5001/api/Events";
  constructor(private http:HttpClient) { }
  getEvents(menuType:string){
    var url=this.url +"?menuType="+menuType;
    return this.http.get(url);
  }
  getEvent(id:any){
    var eventUrl=this.url+'/'+id;
    return this.http.get(eventUrl);
  }
  getAllCategories(menuType:string){
     var url=this.url+"/Categories?categoryOf="+menuType;
     return this.http.get(url);
  }
}
