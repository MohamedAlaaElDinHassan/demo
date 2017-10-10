import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';

import { ResultPage } from '../result/result';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  OnNext() {
    this.navCtrl.push(ResultPage);
  }

    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 1000
        });
        loader.present();
    }

}
