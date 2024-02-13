function letterCombinations(n) {
    function dfs(str, path, n) {
        if (str.length === n) {
            path.push(str)
            return;
        }
        dfs(str + "a", path, n) + dfs(str + "b", path, n)
        return path;


    }
    return dfs("", [], n);
}

console.log(letterCombinations(5))