import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/appComponent', pathMatch: 'full'},
  {path:'appComponent', component: AppComponent},
  {path:'userComponent', component: UserComponent},
  {path:'createUserComponent', component: CreateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
