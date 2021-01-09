import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { UserViewModel } from 'src/models/domain.models';
import { UserEventArgs } from 'src/models/eventargs.model';
import { DataService } from './_services/data.service';
import { filter, map } from 'rxjs/operators';
import { BallViewModel, SpecialViewModel } from './_models/Ball.Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  innings$: Observable<BallViewModel | null>;
  special$: Observable<SpecialViewModel | null>;

  constructor(private dataService: DataService) {
    this.innings$ = this.dataService.innings$.pipe();
    this.special$ = this.dataService.innings$.pipe(
      filter((v) => v?.status === 'boundary' || v?.status === 'sixer'),
      map((v) => {
        const special: SpecialViewModel = {
          batsman: v?.batsman,
          status: v?.status,
        };

        return special;
      })

      // map((v) => {
      //   if (v?.status === 'boundary' || v?.status === 'sixer') {
      //     const special: SpecialViewModel = {
      //       batsman: v?.batsman,
      //       status: v?.status,
      //     };

      //     return special;
      //   } else {
      //     return null;
      //   }
      // })
    );
  }

  clickHandler() {
    this.dataService.increment();
  }
}
