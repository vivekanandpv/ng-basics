import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BallViewModel } from '../_models/Ball.Model';

const BALLS: BallViewModel[] = [
  {
    over: 1,
    count: 3,
    batsman: 'Virat',
    bowler: 'McGrath',
    runs: 4,
    status: 'boundary',
  },
  {
    over: 1,
    count: 4,
    batsman: 'Virat',
    bowler: 'McGrath',
    runs: 2,
    status: 'run',
  },
  {
    over: 2,
    count: 1,
    batsman: 'Rohit',
    bowler: 'Johnson',
    runs: 6,
    status: 'sixer',
  },
  {
    over: 2,
    count: 2,
    batsman: 'Rohit',
    bowler: 'McGrath',
    runs: 1,
    status: 'run',
  },
  {
    over: 4,
    count: 5,
    batsman: 'Hardik',
    bowler: 'Bret Lee',
    runs: 6,
    status: 'sixer',
  },
];

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private counter = 0;
  private inningsSubject = new BehaviorSubject<BallViewModel | null>(null);

  innings$ = this.inningsSubject.asObservable();

  constructor() {}

  increment() {
    if (this.counter > BALLS.length) {
      this.counter = 0;
    }

    this.inningsSubject.next(BALLS[this.counter++]);
  }
}
