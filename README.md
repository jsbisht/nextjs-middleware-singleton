I have the following utility function that is just a singleton class for storing a counter.

```ts
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
```

I want the counter class instance to be accessible within api routes. I have no problem with this.

```ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CounterSingleton } from "@/utility/counter";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  counter: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const counter = CounterSingleton.getInstance();
  counter.increment();
  res.status(200).json({ counter: counter.getCount() });
}
```

> First api call: { counter: 1 }
> Second api call: { counter: 2 }

When i access the same counter class within the middleware. It always gives me counter as 0.

```ts
import { NextResponse } from "next/server";
import { CounterSingleton } from "./utility/counter";

export function middleware() {
  const counter = CounterSingleton.getInstance();
  console.log(counter.getCount());
  return NextResponse.next();
}
```


