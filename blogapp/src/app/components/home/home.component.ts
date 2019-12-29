import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
<app-navbar></app-navbar> 
<div class="card bg-dark text-white" style="height:98%; width: 92%; margin: 10px auto;">
<img class="img-fluid" src="./assets/images/5.jpg" alt="Card image cap">
  <div class="card-img-overlay">
  <h1 class="display-2">City Lights</h1>
    <p class="lead"> If you like bright city lights and active nightlife then you will love this place.
    </p>
    <p class="card-text">Last updated 3 mins ago</p>
    <br> <button type="button" class="btn btn-outline-light stretched-link" routerLink="/singleblog">Read Blog</button>
  </div>
</div>


<div class="card bg-dark text-white" style="height:98%; width: 92%; margin: 10px auto;">
<img class="img-fluid" src="./assets/images/2.jpg" alt="Card image cap">
  <div class="card-img-overlay">
  <h1 class="display-2">Vivid Colours</h1>
    <p class="lead">The use of attention-grabbing or intense color has persisted across time and cultures, despite coming in and out of fashion.</p>
    <p class="card-text">Last updated 3 mins ago</p>
    <br> <button type="button" class="btn btn-outline-light stretched-link">Read Blog</button>
  </div>
</div>


<div class="card bg-dark text-white" style="height:98%; width: 92%; margin: 10px auto;">
<img class="img-fluid" src="./assets/images/1.jpg" alt="Card image cap">
  <div class="card-img-overlay">
  <h1 class="display-2">Snow Mountains</h1>
    <p class="lead">A favourite for everyone at any time of the year, this one is probably all the more fun in winters because of the intermittent snowfall and snow clad beauty of The Alpes.</p>
    <p class="card-text">Last updated 3 mins ago</p>
    <br> <button type="button" class="btn btn-outline-light stretched-link">Read Blog</button>
  </div>
</div>
<app-footer></app-footer>
 `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
