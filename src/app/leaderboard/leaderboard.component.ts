import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  users = [];
  i;
  scores =[];
  name : string;
  constructor(firestore: AngularFirestore) {
  	this.i=0;
  	let dbRef = firestore.collection('users',ref => ref.orderBy('score','desc').limit(5));
  	dbRef.get().subscribe(snapshot =>
  	{
  		snapshot.forEach(doc =>{
	  			this.users[this.i]=doc.data().name;
	  			this.scores[this.i]=doc.data().score;
	  			this.i++;
	  			console.log(this.users);
  		})
  	});
  }

  ngOnInit() {}

 
}
