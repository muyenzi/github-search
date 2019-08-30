import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userview } from '../userview';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user : Userview;

  constructor(private http:HttpClient) { 
  
   }

  ngOnInit() {
    interface ApiResponse {
      avatar_url:string;
      login:string;
      public_repos:number;
      followers:number;
      following:number;
      created_at:Date;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token=23fc1f308fd98aa75501702a95bdd3c27d7108e5").subscribe(data=>{
      // Succesful API request
      this.user = new Userview(data.avatar_url,data.login, data.public_repos, data.followers, data.following, data.created_at)
      // err=> {
      //   this.user =new Userview ("Type a valid username",45,45,45,(2008,));
      //   console.log("An error occurred")
      // }
    })
  }

}
