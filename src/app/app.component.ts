import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserViewModel } from 'src/models/domain.models';
import { UserEventArgs } from 'src/models/eventargs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hour = 10;

  setHour = 12;

  viewModel: UserViewModel = {
    name: 'Default User',
    city: 'Mysuru',
    dob: new Date('2000-05-10'),
    isActive: true,
    score: 568,
  };

  parentHandler(args: UserEventArgs) {
    console.log('Parent', args);
  }

  getGreeting(): string {
    if (this.hour < 12) {
      return 'Good morning';
    } else if (this.hour < 17) {
      return 'Good afternoon';
    } else if (this.hour < 20) {
      return 'Good evening';
    } else {
      return 'Good night';
    }
  }

  onIncrement() {
    if (this.hour < 24) {
      ++this.hour;
    } else {
      this.hour = 0;
    }
  }
}
