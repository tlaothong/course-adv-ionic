import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public dxo: any;
  public dx(evt) {
    this.dxo = evt;
    console.log(evt);
  }

  constructor(public navCtrl: NavController) {

  }

}
