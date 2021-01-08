import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private counter = new BehaviorSubject<number>(100);

  counter$ = this.counter.asObservable();

  constructor() {}

  increment() {
    this.counter.next(this.counter.value + 1);
  }
}
