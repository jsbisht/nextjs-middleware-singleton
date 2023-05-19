export class CounterSingleton {
  private static instance: CounterSingleton;
  private count: number;

  private constructor() {
    this.count = 0;
  }

  public static getInstance(): CounterSingleton {
    if (!CounterSingleton.instance) {
      CounterSingleton.instance = new CounterSingleton();
    }
    return CounterSingleton.instance;
  }

  public increment(): void {
    this.count++;
  }

  public getCount(): number {
    return this.count;
  }
}
