import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { UserViewModel } from 'src/models/domain.models';
import { UserEventArgs } from 'src/models/eventargs.model';
import { DataService } from './_services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public dataService: DataService) {
    console.log(this.dataService.counter);
  }

  clickHandler() {
    this.dataService.increment();
  }
}
