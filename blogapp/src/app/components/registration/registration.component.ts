import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  template:
 
  `
<div>

<div class="card bg-dark text-white">
   
<div class="card-img-overlay">
<h1 class="display-3 text-white" style="margin-left:90px;margin-top:300px">Registration</h1>
</div>

<img class="img-fluid" src="./assets/images/5.jpg" alt="Card image cap">
  <div class="card-img-overlay">
  <div class="d-flex justify-content-center " style="margin-top:-12px;margin-left:550px">
  
  <div class="card bg-white text-dark " style="width: 35rem;">
  <div class="card-body">
   </div>
  <div>

  <form style="margin-left:40px;width:85%;">
  <div class="form-group">
    <label for="inputfirst">First Name</label>
    <input type="text" class="form-control" id="inputfist" placeholder="First Name">
  </div>
  <div class="form-group">
    <label for="inputlast">Last Name</label>
    <input type="text" class="form-control" id="inputlast" placeholder="Last Name">
  </div>
  <div class="form-group">
    <label for="inputage">Age</label>
    <input type="text" class="form-control" id="inputage" placeholder="Age">
  </div>
  
  <div>
  <label for="inputgender">Gender</label><br>
  
  <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="radiomale" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="radiomale">Male</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="radiofemale" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="radiofemale">Female</label><br><br>
</div>
  </div>

  <div class="form-group">
    <label for="inputemail">Email address</label>
    <input type="email" class="form-control" id="inputemail" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="inputpassword">Password</label>
    <input type="password" class="form-control" id="inputpassword" placeholder="Password">
  </div>

  <div class="form-group">
  <label for="inputbio">Bio</label>
  <input type="text" class="textarea" id="inputbio" placeholder="Bio">
</div>
<br>
 <button type="submit" class="btn btn-dark"  routerLink="">Submit</button><br><br>
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

  constructor() { }

  ngOnInit() {
  }

}


