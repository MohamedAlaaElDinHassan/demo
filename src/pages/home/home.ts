import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ResultPage } from '../result/result';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  OnNext() {
    this.navCtrl.push(ResultPage);
  }

}
