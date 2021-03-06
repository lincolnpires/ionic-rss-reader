import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class Details {

  entry: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
      this.entry = this.navParams.get('selectedEntry');
    }

  ionViewDidLoad() {
    console.log('Hello Details Page');
  }

}
