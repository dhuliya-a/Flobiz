import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingleblogComponent } from './components/singleblog/singleblog.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NewpostComponent } from './components/newpost/newpost.component';


const routes: Routes = [
{
  path:"",
  component:LoginComponent
},
{path:"home",
component:HomeComponent},
{
  path:"singleblog",
  component:SingleblogComponent
},
{
  path:"profile",
  component:ProfileComponent
},{
  path:"registration",
  component:RegistrationComponent
},
{
  path:"newpost",
  component:NewpostComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
