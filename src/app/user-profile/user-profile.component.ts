import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userview } from '../userview';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user :Userview;

  constructor(private http:HttpClient) { 
  
   }

  ngOnInit() {
    interface ApiResponse {
      login:string;
      public_repo:number;
      followers:number;
      following:number;
      created_at:Date;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token=23fc1f308fd98aa75501702a95bdd3c27d7108e5").subscribe(data=>{
      // Succesful API request
      this.user = new Userview(data.login, data.public_repo, data.followers, data.following, data.created_at)
    })
  }

}
