// Write a function that computes the list of the first 100 Fibonacci numbers.
// The first two Fibonacci numbers are 1 and 1.
// The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number.
// The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

function first100Fib(n, memo) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 1) return n;

  memo[n] = first100Fib(n - 1, memo) + first100Fib(n - 2, memo);

  return memo[n];
}
console.log(first100Fib(5, (memo = [])));

