import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { UserViewModel } from 'src/models/domain.models';
import { UserEventArgs } from 'src/models/eventargs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('message', { static: true })
  messagePTag!: ElementRef<HTMLParagraphElement>;

  ngAfterViewInit(): void {
    this.messagePTag.nativeElement.innerHTML =
      'Component sets the dom property';
    this.messagePTag.nativeElement.classList.add('text-danger');
    this.messagePTag.nativeElement.classList.add('display-2');
    this.messagePTag.nativeElement.style.border = '1px solid blue';
  }
}
