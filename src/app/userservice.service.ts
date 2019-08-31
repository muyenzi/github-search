import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userview } from './userview';
import { environment } from '../environments/environment'
// import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  user :Userview
  userName :string;
  reponse : any;

  constructor(private http: HttpClient , ) {
 this.user =new Userview( "",0,0,0," "," ")
   }

//   public username:string;
//   public token ="23fc1f308fd98aa75501702a95bdd3c27d7108e5"
//   constructor() { }
// getUserview (){
//     return Userview;
// }
userService(userName){
interface ApiResponse {
    //   avatar_url:string;
      login:string;
      public_repos:number;
      followers:number;
      following:number;
      htlm_url:string;
      bio:string;
    }
    let promise = new Promise ((resolve , reject) => {
        this.http.get<ApiResponse>('https://api.github.com/users/'+userName + "?access_token="+ environment.apiUrl).toPromise().then(reponse => {
        //   this.user.avatar_url =reponse.avatar_url;
          this.user.login=reponse.login;
          this.user.public_repos=reponse.public_repos;
          this.user.followers=reponse.followers;
          this.user.following=reponse.following;
          this.user.bio=reponse.bio;
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



