import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private userLoginApi='api/Login/Login';
  constructor(private http:HttpClient) { }
  Login(userData:any){
    return of(this.http.post<any>(this.userLoginApi,userData)) .pipe(
      (result)=>{
        if(result.source!=null){
          console.log('It works!!');
        }
        return result;
      });
    
  }
}
