function maxSumofSize_K(arr, k) {
  let maxv = arr[0];
  let cur = 0;
  let i = 0;
  for (let right = 0; right < arr.length; right++) {
    if (right >= k) 
      cur -= arr[i++];
    cur += arr[right];
    if (cur > maxv) 
      maxv = cur;
  }
  return maxv;
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

console.log(maxSumofSize_K(arr, k));
