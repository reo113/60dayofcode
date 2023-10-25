


var removeElement = function (nums, val) {
    let left = 0;
    let right = nums.length - 1
    while (left <= right) {
        if (nums[left] === val) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            nums.pop()
            right--
        } else {
            left++;
        }
    }
    return nums.length;
};









let nums = [0,1,2,2,3,0,4,2], val = 2
console.log(removeElement(nums, val))