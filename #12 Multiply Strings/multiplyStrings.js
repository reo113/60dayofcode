/* Problem 12: Multiply Strings
Given two non-negative integers num1 and num2 represented as strings,
return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"
 
Example 2:
Input: num1 = "123", num2 = "456"
Output: "56088" */

const multiplyString = (num1, num2) => {
  let n = num1.length - 1;
  let m = num2.length - 1;
  let cur = 0;
  let prod = Array(m*n).fill(0)
  console.log(prod)
  let remain = 0;
  for (let i = n; i >= 0; i--) {
    for (let j = m; j >= 0; j--) {
      cur = num1[i] * num2[j] + remain + prod[i + j + 1];
      remain = Math.floor(cur / 10);
      prod[i + j + 1] = cur % 10;
    }
    prod[i] += remain;
  }

  return prod
};

let num1 = "123";
let num2 = "456";
let item = multiplyString(num1, num2);
console.log(item);
