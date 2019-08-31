import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userName :string;
  reponse : any;

  constructor(private http: HttpClient ) {

   }

  ngOnInit() {
  }
  search (){
    this.http.get('https://api.github.com/users/'+this.userName + "?access_token=23fc1f308fd98aa75501702a95bdd3c27d7108e5")
    .subscribe((reponse) => {
      this.reponse = reponse;
      console.log(this.reponse)
      
    })
  }

}
