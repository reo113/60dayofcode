
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]

// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]

// Output: ""

// Explanation: There is no common prefix among the input strings.

let longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        prefix = prefix.slice(0, j);
        if (prefix === '') return '';
    }
    
    return prefix;
};

let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs));