import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  @Input() header: string;
  @Output() userEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  clickHandler() {
    console.log('Sample: Click');
    this.userEvent.emit(104);
  }
}
