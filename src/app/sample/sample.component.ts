import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserViewModel } from 'src/models/domain.models';
import { UserEventArgs } from 'src/models/eventargs.model';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  @Input() color!: string;

  constructor() {}

  ngOnInit(): void {
    console.log('Color SampleComponent', this.color);
  }
}
