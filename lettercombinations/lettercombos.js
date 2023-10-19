function letterCombinations(n) {
    function backtrack(str, path, n) {
        if (str.length === n) {
            path.push(str)
            return;
        }

        backtrack(str + "a", path, n) + backtrack(str + "b", path, n)
        return path;


    }
    return backtrack("", [], n);
}

console.log(letterCombinations(2))