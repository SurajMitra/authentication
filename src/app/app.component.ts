import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'authentication';
  isSignedIn = false;

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);


  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage():any {

    if(this.password.hasError('required')){
      return 'You  must enter a value';
    }
     return this.password.invalid ? 'Your password must contain 6 characters' : '';
  }
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
