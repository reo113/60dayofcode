// Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
// Try solving this without creating a copy of the list.
// How many swap or move operations do you need?

function rotateListKTimes(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

const list = [1, 2, 3, 4, 5, 6];
console.log(rotateListKTimes(list, 2));
