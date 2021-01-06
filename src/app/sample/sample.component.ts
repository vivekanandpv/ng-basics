import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserEventArgs } from 'src/models/eventargs.model';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  @Input() header: string;
  @Output() userEvent = new EventEmitter<UserEventArgs>();

  constructor() {}

  ngOnInit(): void {}

  clickHandler() {
    console.log('Sample: Click');
    this.userEvent.emit({
      message: 'User clicked the button',
      on: new Date(),
    });
  }
}
