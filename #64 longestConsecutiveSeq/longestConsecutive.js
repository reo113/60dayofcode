// Given an unsorted array of integers nums, 
// return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4

// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

var longestConsecutive = function (nums) {
    let seen = new Set(nums)
    let maxCount = 0
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        if (!seen.has(cur - 1)) {
            let curCount = 0
            while (seen.has(cur + curCount)) {
                curCount++
            }
            maxCount = Math.max(maxCount, curCount)
        }
    }
    return maxCount
};
let nums = [100, 4, 200, 1, 3, 2]
console.log(longestConsecutive(nums))