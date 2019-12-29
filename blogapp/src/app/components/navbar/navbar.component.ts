import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    

  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" style=" margin-bottom: 20px;">
  <a class="navbar-brand" href="#" style=" margin-top: 2px;" routerLink="/home">
     Channel
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
 

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" routerLink="/newpost">New Post<span class="sr-only">(current)</span></a>
      </li>
      
       </ul>
    
    <form class="form-inline my-2 my-lg-0">
    
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
     
    <button type="button" class="btn btn-outline-light" type="submit" style="margin-right: 8px" routerLink="/profile">Profile</button>
    <button type="button" class="btn btn-outline-light" type="submit" routerLink="">Logout</button>
    </form>
  </div>
</nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
