// util function that computes the fibonacci numbers
export default function fibonacci(n: number): number {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  const result1: number = fibonacci(n - 1);
  const result2: number = fibonacci(n - 2);
  return result1 + result2;
}
