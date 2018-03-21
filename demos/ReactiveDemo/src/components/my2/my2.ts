import { Component } from '@angular/core';

/**
 * Generated class for the My2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my2',
  templateUrl: 'my2.html'
})
export class My2Component {

  text: string;

  constructor() {
    console.log('Hello My2Component Component');
    this.text = 'Hello World';
  }

}
