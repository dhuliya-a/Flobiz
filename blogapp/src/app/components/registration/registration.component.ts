import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-registration',
  template:
 
  `
<div>

<div class="card bg-dark text-white">
   
<div class="card-img-overlay">
<h1 class="display-3 text-white" style="margin-left:90px;margin-top:300px">Registration  {{inputbio}}</h1>


</div>
<img class="img-fluid" src="./assets/images/5.jpg" alt="Card image cap">


<div class="card-img-overlay">

<div class="d-flex justify-content-center " style="margin-top:-12px;margin-left:550px">

<div class="card bg-white text-dark " style="width: 35rem;">
<div class="card-body">
</div>
<div>

<form (ngSubmit)="submitForm()" style="margin-left:40px;width:85%;" >

<div class="form-group">
    <label for="inputfirst">First Name</label>
    <input type="text" class="input" name="firstname" placeholder="Enter Your First Name" [(ngModel)]="inputfirst">
  </div>

<div class="form-group">
    <label for="inputlast">Last Name</label>
    <input type="text" class="input" name="lastname" placeholder="Enter Your Last Name" [(ngModel)]="inputlast">
  </div>
  
<div class="form-group">
    <label for="inputage">Age</label>
    <input type="number" class="input" name="age" placeholder="Enter Your Age" [(ngModel)]="inputage">  
  </div>
  
<div>
  
<label for="inputgender">Gender</label><br>
  
  <div class="custom-control custom-radio custom-control-inline" >
    <input type="radio" id="radiomale" name="customRadioInline1" class="custom-control-input" [(ngModel)]="inputgender">
    <label class="custom-control-label" for="radiomale">Male</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="radiofemale" name="customRadioInline1" class="custom-control-input" >
    <label class="custom-control-label" for="radiofemale">Female</label><br><br>
  </div>
</div>

<div class="form-group">
    <label for="inputemail">E-mail address</label>
    <input type="email" class="input" name="email" aria-describedby="emailHelp" placeholder="Enter Your E-mail address" [(ngModel)]="inputemail">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>

<div class="form-group">
    <label for="inputpassword">Password</label>
    <input type="password" class="form-control" name="password" placeholder="Choose a Password" [(ngModel)]="inputpassword">
  </div>

<div class="form-group">
  <label for="inputbio">Bio</label>
  <input type="text" class="textarea" name="bio" placeholder="Enter a Bio" [(ngModel)]="inputbio">
</div>

<br>

<button type="button" (click)="senduser()" class="btn btn-dark" routerLink="">Submit</button>

<br>
<br>

</form>

</div>

</div>
  
  
</div>
 
 
</div>
</div>


</div>
 
  `,
  styles: []
})


export class RegistrationComponent implements OnInit {
  
  inputfirst;
  inputlast;
  inputage;
  inputgender;
  radiomale;
  radiofemale;
  inputemail;
  inputpassword;
  inputbio;

  newuser={first_name:this.inputfirst,last_name:this.inputlast,age:this.inputage,bio:this.inputbio,email:this.inputemail,password:this.inputpassword};


  constructor(private userservice:UserService) { }

  ngOnInit() {
  }

  senduser(){
    alert("User Registered!")
    this.userservice.senduser();
  }



}


