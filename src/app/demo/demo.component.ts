import {
  AfterContentChecked,
  AfterContentInit,
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
  implements
    OnInit,
    AfterViewInit,
    DoCheck,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked {
  @Input() city!: string;
  counter = 100;
  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit', this.city);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
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

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  onClick() {
    console.log('Click handler');
  }
}
