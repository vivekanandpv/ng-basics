import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserViewModel } from 'src/models/domain.models';
import { UserEventArgs } from 'src/models/eventargs.model';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  @Input() user!: UserViewModel;
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
