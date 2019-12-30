import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
<div>

  <app-navbar></app-navbar>  
 
  <div class="card-img-overlay">
  <h1 class="display-3 text-muted" style="margin-left:600px;margin-top:85px">Profile</h1>
  </div>
 
  <div class="d-flex flex-row bd-highlight mb-3" style="margin-top:100px">
  
 
  <div  style="margin-right:20px;margin-left:300px">
  
  <img  src="./assets/images/10.jpg" alt="Card image cap">
  
  <button type="button" class="btn btn-outline-dark"  style="width:30%;margin-top:20px;margin-left:130px">Change Photo</button><br><br>

</div>

<div class="bg-transparent" align="center" style="width:500px;height:500px;margin-left:-240px">
<div class="card-body">
<br><br><br>
<b>Born</b><br>	James Paul McCartney<br>
18 June 1942 (age 77)<br>
Liverpool, England<br><br>
<b>Nationality</b><br>	English<br><br>
<b>Occupation</b>	<br>
Singer<br>Songwriter<br>Musician<br>Producer<br>Composer<br>Businessman

</div>
</div>
</div> 
<app-footer></app-footer>
  

 </div> 
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
