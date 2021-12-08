import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'authentication';
  isSignedIn = false;
  constructor(private firebase: FirebaseService){}

  ngOnInit(){
    if(localStorage.getItem('user') != null)
    this.isSignedIn = true;
    else
    this.isSignedIn = false;
  }  

  async OnsignUp(email:string, password:string){
    await this.firebase.signUp(email, password)
    if(this.firebase.isLoggedIn)
    this.isSignedIn = true
  }
  
  async OnsignIn(email:string, password:string){
    await this.firebase.signIn(email, password)
    if(this.firebase.isLoggedIn)
    this.isSignedIn = true
  }

  handleLogout(){
    this.isSignedIn = false;
  }

}
