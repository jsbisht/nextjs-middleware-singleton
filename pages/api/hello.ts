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
