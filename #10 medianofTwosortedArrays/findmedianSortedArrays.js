const findMedianSortedArrays = (arr1, arr2) => {
  // const newarr = arr1.concat(arr2).sort((a, b) => a - b);
  const newarr = [...arr1,...arr2].sort((a, b) => a - b);
  console.log(newarr);
  let left = 0;
  let right = newarr.length - 1;
  while (left < right) {
    left++;
    right--;
  }
  return (newarr[left] + newarr[right]) / 2;
};
console.log(findMedianSortedArrays([3], [-2, -1]));
