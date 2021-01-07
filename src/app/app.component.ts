import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserViewModel } from 'src/models/domain.models';
import { UserEventArgs } from 'src/models/eventargs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter = 5;

  style = {
    color: 'blue',
    'font-size': '24px',
    'font-weight': '700',
  };

  onChangeClass() {
    if (this.counter > 1) {
      --this.counter;
    } else {
      this.counter = 5;
    }
  }

  get css(): any {
    //  variant 1: string
    return `display-${this.counter}`;

    //  variant 2: string[]
    // return [`display-${this.counter}`, 'text-success', 'font-weight-bold'];

    //  variant 3: configuration object
    // return {
    //   'text-success': true,
    //   'display-3': false,
    // };
  }
}
