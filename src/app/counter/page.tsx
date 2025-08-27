import React from "react";
import Counter from "./Counter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "This is the counter page",
};

const CounterPage = () => {
  return <Counter></Counter>;
};

export default CounterPage;
