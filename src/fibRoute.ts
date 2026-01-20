// Endpoint for querying the fibonacci numbers

import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response) => {
  const { num } = req.params;
  const numStr = num as string;

  const fibN = fibonacci(parseInt(numStr));
  let result = `fibonacci(${numStr}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${numStr}) is undefined`;
  }

  res.send(result);
};
