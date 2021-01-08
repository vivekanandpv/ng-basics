import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent
  implements OnInit, AfterViewInit, OnChanges, DoCheck, AfterViewChecked {
  @Input() city!: string;
  counter = 100;
  constructor() {
    console.log('constructor', this.city);
    setTimeout(() => {
      console.log('Timer triggered');
      ++this.counter;
    }, 10000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.city);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  onClick() {
    console.log('Click handler');
  }
}
