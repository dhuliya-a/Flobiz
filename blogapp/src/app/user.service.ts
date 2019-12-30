import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";


export interface user{
  
  email: String;
  password: String;
  bio: String;
  gender:String;
  age: Number;
  first_name: String;
  last_name: String;

}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  

  senduser():Observable<user>{

    const newUser= 
  {email: "String",
  password: "String",
  bio: "String", 
  gender:"HI",
  age: 17,
  first_name: "String",
  last_name: "String"
  };
  console.log("SENT!");
    return this.http.post<user>("http://localhost:3000/user/",newUser);
    
  }

}
