import { ok } from './../model/httpstatus';
import { CreateUserService } from './create-user.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';



import { Router } from "@angular/router";


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers:[CreateUserService]
})
export class CreateUserComponent implements OnInit {

  private user: UserModel;
  private isValid : Boolean=true;
  private message: String=" "; 

  constructor(private createUserService: CreateUserService, private router: Router) { 

    if (sessionStorage.getItem("user")){
this.user = JSON.parse(sessionStorage.getItem("user"));
    }
    else{
      this.user = new UserModel
    }
    
  }

  ngOnInit() {
  }

  public saveOrUpdate(): void{
this.isValid=this.createUserService.validate(this.user);

if(this.isValid){
this.createUserService.saveOrUpdate(this.user).subscribe(res=>{

  if(res.responseCode== ok){
this.router.navigate(['/userComponent']);
  }
  else{

    this.message=res.message;
    this.isValid=false;
  }
});
}else{
  this.message="Los campos con * son obligatorios";
}
  }
}
 