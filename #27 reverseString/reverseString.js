// Reverse a string without using the built-in reverse() method.

function reverseString(str) {
  let ret = "";
  function dfs(str, ans) {
    if (str.length === 0) return ans
    let char = str[str.length-1];
    ans += dfs(str.slice(0,str.length-1), char)
    return ans
  }
  return dfs(str, "")
  // let char = str.split('');
  // let left = 0;
  // let right = char.length - 1;
  // while (left < right) {
  //   [char[right], char[left]] = [char[left], char[right]];
  //   left++;
  //   right--;
  // }

  // return char.join('');
}

const word = "rachel";
console.log(reverseString(word));
