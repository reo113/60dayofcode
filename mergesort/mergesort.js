function merge(left, right) {
  const sorted = [];
  let leftidx = 0;
  let rightidx = 0;
  while (leftidx < left.length && rightidx < right.length) {
    left[leftidx] < right[rightidx]
      ? sorted.push(left[leftidx++])
      : sorted.push(right[rightidx++]);
  }
  return [...sorted, ...left.slice(leftidx), ...right.slice(rightidx)];
}
const mergesort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(0, mid));
  let right = mergesort(arr.slice(mid));
  return merge(left, right);
};
console.log(mergesort([3, -2, -1]));
