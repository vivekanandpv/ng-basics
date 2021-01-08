import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserViewModel } from 'src/models/domain.models';
import { UserEventArgs } from 'src/models/eventargs.model';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  constructor(public dataService: DataService) {
    console.log(this.dataService.counter);
  }

  ngOnInit(): void {}
}
