function maxSumArr(num) {
  let cur = 0;
  let max = num[0];

  for (let end = 0; end < num.length; end++) {
    cur += num[end];
    if (cur < num[end]) {
      cur = num[end];
    }
    if (cur > max) {
      max = cur;
    }
  }
  return max;
}
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSumArr(nums));
