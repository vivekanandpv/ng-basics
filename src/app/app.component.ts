import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserViewModel } from 'src/models/domain.models';
import { UserEventArgs } from 'src/models/eventargs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cities: string[] = ['Bengaluru', 'Madurai', 'Delhi', 'Kokata', 'London'];

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
}
