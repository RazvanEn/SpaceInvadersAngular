import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Routes, RouterModule, Router} from '@angular/router';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
  	private ngZone: NgZone,
  	private router: Router,
    public afAuth: AngularFireAuth// Inject Firebase auth service
  ) { }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
    	this.ngZone.run(() => this.router.navigate(['menu']));
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }

}