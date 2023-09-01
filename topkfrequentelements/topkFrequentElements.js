/* Problem 7: Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order. 

Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1] */

const topK = (arr, k) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  return Array.from(map.keys())
    .sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
};

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
console.log(topK(nums, k));
