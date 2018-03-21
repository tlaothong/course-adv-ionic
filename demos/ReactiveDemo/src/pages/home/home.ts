import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { map, mapTo } from 'rxjs/operators';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data: any;
  public page2go = 'LazPage';
  public page2go2 = 'MoreLazPage';

  constructor(public navCtrl: NavController,
              http: Http)
  {
    this.data = http.get("https://raw.githubusercontent.com/tlaothong/course-adv-ionic/master/actor.json")
      .pipe(map(d => d.json()));
      //.subscribe(r => this.data = r);
  }

}
