// ●	Write a function that tests whether a string is a palindrome.
function palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left++] !== str[right--]) {
      return false;
    }
  }
  return true;
}
const word = "racecar";
console.log(palindrome(word));
