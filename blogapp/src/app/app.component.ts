import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
<router-outlet></router-outlet>
`,
  styles: []
})
export class AppComponent {
  title = 'Channel';

  constructor(private http:HttpClient){

  }
  ngOnInit(){
  this.http.get("http://localhost:3000/user/5e0601886abe9235e0bd4e9b").subscribe(data=>{console.log(data)});
  }
}
