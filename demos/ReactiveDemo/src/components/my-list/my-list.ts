import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-list',
  templateUrl: 'my-list.html'
})
export class MyListComponent {

  @Input() text: string;
  @Output() selectedId: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log('Hello MyListComponent Component');
    this.text = 'Hello World';
    this.selectedId.emit("n/a");
  }

  public clickMe() {
    console.log('Click');
    this.selectedId.emit("id:1234");
  }

}
