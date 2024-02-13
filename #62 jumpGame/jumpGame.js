var canJump = function (nums) {

    let reachable = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > reachable) return false;
        reachable = Math.max(reachable, i + nums[i])
    }
    return true
};
let arr = [3,2,1,0,4]
console.log(canJump(arr))