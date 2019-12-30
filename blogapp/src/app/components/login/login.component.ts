import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    
  <body >

  <div>  

  
  <div class="card bg-dark text-white">
   
  <div class="card-img-overlay">
  <h1 class="display-3 text-white" style="margin-left:570px;margin-top:100px">Channel</h1>
  <h1 class="text-white" style="margin-left:677px;margin-top:0px">Speak Your Mind</h1>  
  </div>
  
  <img class="img-fluid" src="./assets/images/6.jpg" alt="Card image cap">
    <div class="card-img-overlay">
    <div class="d-flex justify-content-center " style="margin-top:350px">
    
    <div class="card bg-white text-dark " style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title" align="center" style="font-weight: bold;">Account Login</h5>
    </div>
    <input type="text" class="form-control bg-transparent text-dark btn-outline-dark" placeholder="E-mail Address" aria-label="Username" aria-describedby="basic-addon1" style="width:80%;margin-left:28px;">
    <br>
    <input type="password" class="form-control bg-transparent text-dark btn-outline-dark" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" style="width:80%;margin-left:28px;">
   
  
    <div class="card-body">
    <button type="button" class="btn btn-outline-dark" style="margin-left:90px;" routerLink="/home">Login</button>
  
      <br>
      <br>
      <a href="#" class="card-link text-dark " style="margin-left:94px;" routerLink="/registration">Sign Up</a>
    </div>
  </div>
    
    
    </div>
   
   
    </div>
  </div>
  
  </div>
  </body>
  
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
