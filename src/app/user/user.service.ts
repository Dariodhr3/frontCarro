import { UserModel } from './../model/user.model';
import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http:HttpClient) { }

  public getUsers():Observable<UserModel[]>{

    return this.http.get<UserModel[]>("http://localhost:8080/getUsers");
    //imprime los usuarios en consola de crome para prueba  
    //this.users = res as UserModel[];
    
    
    
  }

  public delete(user: UserModel):void{
    this.http.post("http://localhost:8080/deleteUser", JSON.stringify( user)).subscribe();
    
      }
}
