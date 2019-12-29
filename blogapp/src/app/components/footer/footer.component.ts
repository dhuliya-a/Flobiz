import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    
<footer class="page-footer font-small blue">

<!-- Copyright -->
<div class="footer-copyright text-center py-3">© 2019 Flobiz
  <a href="https://github.com/dhuliya-a/Flobiz"> Anubhav Dhuliya</a>
</div>
<!-- Copyright -->

</footer>


  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
