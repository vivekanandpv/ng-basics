import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserEventArgs } from 'src/models/eventargs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Learning Angular';

  parentHandler(args: UserEventArgs) {
    console.log('Parent', args);
  }
}
