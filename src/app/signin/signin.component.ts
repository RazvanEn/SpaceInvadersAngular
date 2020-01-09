import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {MatDialogModule} from '@angular/material/dialog';
import {AngularFireDatabaseModule} from '@angular/fire/database';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() { }

}