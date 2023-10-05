// ●	Write a function that merges two sorted lists into a new sorted list.
// [1,4,6],[2,3,5] → [1,2,3,4,5,6].
// You can do this quicker than concatenating them followed by a sort.

function mergeTwoArrs(arr1, arr2) {
  let left = 0;
  let right = 0;
  let res = [];
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      res.push(arr1[left++]);
    } else {
      res.push(arr2[right++]);
    }
  }
  while (left < arr1.length) {
    res.push(arr1[left++]);
  }
  while (right < arr2.length) {
    res.push(arr2[right++]);
  }
  return res;
}

const arr1 = [1, 4, 6];
const arr2 = [2, 3, 5];
console.log(mergeTwoArrs(arr1, arr2));
