import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username: string;
  constructor(af: AngularFireAuth, firestore: AngularFirestore) { 
  	this.username=af.auth.currentUser.displayName;
    var docRef = firestore.collection("users").doc(this.username);
    docRef.get().subscribe(function(doc){
      if(doc.exists){}
        else{
          docRef.set({
            name:this.username
          })
        }
    })
  }

  ngOnInit() {
  }

}
