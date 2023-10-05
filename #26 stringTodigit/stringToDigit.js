// Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2].
function strToDigit(num) {
  const arr = [];
  while (num) {
    let mod = Math.floor(num % 10);
    num = Math.floor(num / 10);
    arr.unshift(mod);
  }
  return arr;
}

let num = 2342;
console.log(strToDigit(num));
