// Endpoint for querying the fibonacci numbers

import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response) => {
  const { num } = req.params;
  const numStr = typeof num === "string" ? num : String(num);

  const fibN: number = fibonacci(parseInt(numStr, 10));
  let result = `fibonacci(${numStr}) is ${String(fibN)}`;

  if (fibN < 0) {
    result = `fibonacci(${numStr}) is undefined`;
  }

  res.send(result);
};
