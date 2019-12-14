import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
    let config = {
      apiKey: 'AIzaSyDrZH3Oou9-p3jNomEG6Dgjm2ExONgQang',
    authDomain: 'naminhaloja.firebaseapp.com',
    databaseURL: 'https://naminhaloja.firebaseio.com',
    projectId: 'naminhaloja',
    storageBucket: 'naminhaloja.appspot.com',
    messagingSenderId: '663817652034',
    appId: '1:663817652034:web:1f5c86eeddb3aa96'
    };
    firebase.initializeApp(config);
  }

}
