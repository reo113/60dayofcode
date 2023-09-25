/* Problem 8: Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
 
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1] */
const twoSum = (arr, t) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(arr[i], i);
  }
  return [];
};
