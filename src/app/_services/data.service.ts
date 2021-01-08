import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  counter = 100;
  constructor() {
    console.log('DataService');
  }

  increment() {
    ++this.counter;
  }
}
