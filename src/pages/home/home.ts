import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dexie } from 'dexie';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  db: Dexie;
  constructor(public navCtrl: NavController) {

    this.db = new Dexie('Friends');
    this.db.version(1).stores({
      friends: '++id,name,age'
    });
  }
}
