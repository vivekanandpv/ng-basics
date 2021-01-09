export interface BallViewModel {
  count: number;
  over: number;
  bowler: string;
  runs: number;
  batsman: string;
  status: string;
}

export interface SpecialViewModel {
  batsman: string | undefined;
  status: string | undefined;
}
