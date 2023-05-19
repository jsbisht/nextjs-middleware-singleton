import { NextResponse } from "next/server";
import { CounterSingleton } from "./utility/counter";

export function middleware() {
  const counter = CounterSingleton.getInstance();
  console.log(counter.getCount());
  return NextResponse.next();
}
