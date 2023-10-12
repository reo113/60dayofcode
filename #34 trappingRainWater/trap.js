// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
// In this case, 6 units of rain water (blue section) are being trapped.

function trap(arr) {
  let left = 0;
  let right = arr.length - 1;
  let leftmax = arr[left];
  let rightmax = arr[right];
  let res = 0;
  while (left < right) {
    if (leftmax < rightmax) {
      left++;
      leftmax = Math.max(leftmax, arr[left]);
      let water = leftmax - arr[left];

      if (water > 0) {
        res += water;
      }
    } else {
      right--;
      rightmax = Math.max(rightmax, arr[right]);
      let water = rightmax - arr[right];

      if (water > 0) {
        res += water;
      }
    }
  }
  return res;
}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
