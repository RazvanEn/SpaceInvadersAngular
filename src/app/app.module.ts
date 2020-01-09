import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { SigninComponent } from './signin/signin.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AuthService} from './auth.service';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const firebaseConfig = {
    apiKey: "AIzaSyDgbT7MgBNum1ydnkxUg2avOTIQyfFRKe4",
    authDomain: "my-awesome-project-238c6.firebaseapp.com",
    databaseURL: "https://my-awesome-project-238c6.firebaseio.com",
    projectId: "my-awesome-project-238c6",
    storageBucket: "my-awesome-project-238c6.appspot.com",
    messagingSenderId: "949660919621",
    appId: "1:949660919621:web:066a8493746d0e8e00002c"
  }

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireDatabaseModule,
    AngularFireStorageModule, BrowserAnimationsModule // storage
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
