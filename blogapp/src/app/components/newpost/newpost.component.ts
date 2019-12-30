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
    <input type="text" class="form-control" id="inputfist" placeholder="Add a description of the post">
  </div>
  <br>
  <label>Upload Image</label>
  
  <div class="custom-file">
   
  <input type="file" class="custom-file-input" id="customFile">
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>
<br>
<br>
  <div class="form-group">
  
  </div>


  <div style="width:95%;margin-left:30px">
  <ejs-richtexteditor id='defaultRTE'>
  <ng-template #valueTemplate>
  <p>Write Away. Mentioned below are some features to help you make the best of this editor.</p>
  <br>
  <p><b>Key features:</b></p>
  <ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li>
  <li><p>Capable of handling markdown editing.</p></li>
  <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
  <li><p>Provides a fully customizable toolbar.</p></li>
  <li><p>Provides HTML view to edit the source directly for developers.</p></li>
  <li><p>Supports third-party library integration.</p></li>
  <li><p>Allows preview of modified content before saving it.</p></li>
  <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
  <li><p>Contains undo/redo manager. </p></li>
  <li><p>Creates bulleted and numbered lists.</p></li>
  </ul>
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
