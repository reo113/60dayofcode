function quicksort(arr) {
    if (arr.length < 1) return arr;
    const pivot = arr[Math.floor(Math.random() * arr.length)]
    const left = []
    const right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > pivot) right.push(arr[i])
        else if (arr[i] < pivot) left.push(arr[i])
    }
    return quicksort(left).concat(pivot, quicksort(right))
}
let arr = [3, 2, 1, 5, 6, 4]
console.log(quicksort(arr))