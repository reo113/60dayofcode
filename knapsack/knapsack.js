/**
     * Memoization Solution
     * Time: O(n * m), Space: O(n * m), where n is the number of items & m is the capacity.
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
function maximumProfit(profit, weight, capacity) {
    // A 2d array, with N rows and M + 1 columns, init with -1's
    let N = profit.length, M = capacity;
    let cache = new Array(N).fill(-1).map(() => new Array(M + 1).fill(-1))
    return memoHelper(0, profit, weight, capacity, cache);
}

function memoHelper(i, profit, weight, capacity, cache) {
    if (i == profit.length) {
        return 0;
    }
    if (cache[i][capacity] != -1) {
        return cache[i][capacity];
    }

    // Skip item i
    cache[i][capacity] = memoHelper(i + 1, profit, weight, capacity, cache);

    // Include item i
    let newCap = capacity - weight[i];
    if (newCap >= 0) {
        let p = profit[i] + memoHelper(i + 1, profit, weight, newCap, cache);
        // Compute the max
        cache[i][capacity] = Math.max(cache[i][capacity], p);
    }

    return cache[i][capacity];
}


let profit = [4, 4, 7, 1]
let weight = [5, 2, 3, 1]
let capacity = 8
console.log(maximumProfit(profit, weight, capacity))