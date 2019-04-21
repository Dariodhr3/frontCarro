import { UserModel } from './../model/user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestResponse } from '../model/restResponse.model';
import {HttpClient  } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http:HttpClient) {  

  }
public validate(user: UserModel): boolean{
  let isValid = true;
 

  if(!user.firstName){
    isValid=false;
  }

  if(!user.firstSurname){
    isValid=false;
  }
  
  if(!user.address){
    isValid=false;
  }
  return isValid; 
}
  public saveOrUpdate(user: UserModel): Observable<RestResponse>{
return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate", JSON.stringify( user));
  }
}
