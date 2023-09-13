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
  let m = num1.length;
  let n = num2.length;
  const prod = new Array(m + n).fill(0);
  for (let i = m-1; i >= 0; i--) {
    for (let j = n-1; j >= 0; j--) {
      const p1 = i + j;
      const p2 = i + j + 1;
      let sum = prod[p2] + Number(num1[i]) * Number(num2[j]);
      prod[p2] = sum % 10;
      prod[p1] += Math.floor(sum / 10);
    }
  }

  if (prod[0] === 0) prod.shift();
  return prod.join("");
};

let num1 = "123";
let num2 = "456";
let item = multiplyString(num1, num2);
console.log(item);
