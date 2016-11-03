import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RssProvider } from '../../providers/rss-provider';
import { Details } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  entries: any;

  constructor(
    public navCtrl: NavController,
    public rssProvider: RssProvider
  ) {
    this.entries = [];

    // this.navCtrl = navCtrl;

    this.rssProvider.load().subscribe(data => {
      this.entries = data;
    });
  }

  openPage(entry) {
    this.navCtrl.push(Details, {selectedEntry: entry});
  }

}
