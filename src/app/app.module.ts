import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAY677mk7wGUCtBik0B9fQIRT5mYoRn0b4",
      authDomain: "fir-authentication-6eb00.firebaseapp.com",
      projectId: "fir-authentication-6eb00",
      storageBucket: "fir-authentication-6eb00.appspot.com",
      messagingSenderId: "509017155159",
      appId: "1:509017155159:web:63a61251fca89fd667e512"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
