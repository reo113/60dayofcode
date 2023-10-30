// Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
// Try solving this without creating a copy of the list.
// How many swap or move operations do you need?

function rotateListKTimes(arr, k) {
  k = k % arr.length;
  function reverse(arr, left, right) {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }

  }
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1)
  return arr



}

const list = [1, 2, 3, 4, 5, 6];
console.log(rotateListKTimes(list, 2));
