import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { UserViewModel } from 'src/models/domain.models';
import { UserEventArgs } from 'src/models/eventargs.model';
import { DataService } from './_services/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  localCounter$: Observable<number>;
  constructor(private dataService: DataService) {
    this.localCounter$ = this.dataService.counter$.pipe(
      map((v) => v * 10),
      map((v) => v * 2)
    );
  }

  clickHandler() {
    this.dataService.increment();
  }
}
