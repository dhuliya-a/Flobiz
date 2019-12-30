import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';


@Component({
  selector: 'app-newpost',
  template: `
  <div>
<div>
  <app-navbar></app-navbar></div>
  <div style="width:70%;margin-left:210px">

  <br>
  <div class="form-group">
    <label for="inputfirst">Blog Title</label>
    <input type="text" class="form-control" id="inputfist" placeholder="Enter Blog Title">
  </div>
  <br>
  <div class="form-group">
    <label for="inputfirst">Description</label>
    <input type="text" class="form-control" id="inputfist" placeholder="Add a description of the blog">
  </div>
  <br>
  <div class="form-group">
  
  </div>


  <div style="width:95%;margin-left:30px">
  <ejs-richtexteditor id='defaultRTE'>
  <ng-template #valueTemplate>
  <p>Write Away.</p>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
    
  </ng-template>
  </ejs-richtexteditor>
  
  </div>
  <br>
  <button type="submit" class="btn btn-dark" style="margin-left:495px" routerLink="/home">Submit</button>
  <div style="margin-top:10px"><app-footer></app-footer></div>




  </div>
  
  `,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
  styles: []
})
export class NewpostComponent implements OnInit {
  constructor() { }  ngOnInit() {
  }

}
