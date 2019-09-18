import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userview } from './userview';
import { environment } from '../environments/environment'
import { Repolist } from './repolist';
// import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  user :Userview
  userName :string;
  reponse : any;
  repolist:Repolist[];

  constructor(private http: HttpClient , ) {
 this.user =new Userview( "","",0,0,0," "," ");
 this.repolist =[];
   }

userService(userName){
interface ApiResponse {
      avatar_url:string;
      login:string;
      public_repos:number;
      followers:number;
      following:number;
      bio: string;
      html_url:string;
      
    }
    let promise = new Promise ((resolve , reject) => {
        this.http.get<ApiResponse>('https://api.github.com/users/'+ userName + "?access_token="+ environment.API).toPromise().then(reponse => {
          this.user.avatar_url =reponse.avatar_url;
          this.user.login=reponse.login;
          this.user.public_repos=reponse.public_repos;
          this.user.followers=reponse.followers;
          this.user.following=reponse.following;
          this.user.bio = reponse.bio;
          this.user.html_url=reponse.html_url;
         
          console.log(this.reponse)
          resolve () 
        },
        err => {
            this.user.login="Invalid "
            
         reject(err)
        })
    })
       return promise
        
    }
   
}



