import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[v2Premium]',
})
export class PremiumDirective {
  @HostBinding('style.color')
  @Input()
  color!: string;

  @HostBinding('style.backgroundColor')
  @Input()
  backgroundColor!: string;

  @Output() v2Event = new EventEmitter<string>();

  constructor() {}

  @HostBinding('style.fontSize')
  fontSize = '1.25rem';

  @HostBinding('style.padding')
  padding = '0.25rem 1rem';

  @HostBinding('style.margin')
  margin = '1rem';

  @HostBinding('style.borderRadius')
  borderRadius = '25%';

  @HostBinding('style.border')
  borderStyle = '0.5px solid grey';

  @HostListener('click', ['$event'])
  directiveClickHandler(args: MouseEvent) {
    this.v2Event.emit(args.target?.innerHTML);
  }
}
