function quickSelect(arr, k) {
    if (k < 0 || k >= arr.length) return null
    if (arr.length <= 1) return arr[0]
    let pivot = arr[Math.floor(Math.random() * arr.length)]
    let left = []
    let right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i])
        else right.push(arr[i])
    }
    if (k < left.length) return quickSelect(left, k)
    else if (k === left.length) return pivot
    else return quickSelect(right, k - left.length - 1)
}

let arr = [3, 2, 1, 5, 6, 4]
let k = 2
//smallest # is k-1
//largest # is n-k
console.log(quickSelect(arr,5))
console.log(arr)