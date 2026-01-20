// Endpoint for querying the fibonacci numbers

import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response): void => {
  const num = req.params.num;
  if (typeof num !== "string") {
    res.status(400).send("Invalid parameter");
    return;
  }

  const fibN: number = fibonacci(parseInt(num, 10));
  let result = `fibonacci(${num}) is ${String(fibN)}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
