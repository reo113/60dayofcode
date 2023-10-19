function permutations(arr) {
  function backtrack(arr, path) {
    if (arr.length === 0) {
      res.push(path);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      backtrack([...arr.slice(0, i), ...arr.slice(i + 1)], [...path, arr[i]]);
    }
  }

  const res = [];
  backtrack(arr, []);
  return res;
}

let nums = [1, 2, 3];
console.log(permutations(nums));
