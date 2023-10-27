function stringsubsets(s) {
    let res = []
    let subset = []
    function dfs(i) {
        if (i >= s.length) {
            res.push([...subset])
            return
        }
        subset.push(s[i])
        dfs(i + 1)
        subset.pop()
        dfs(i + 1)
    }
    dfs(0)
    return res
}
const word = 'abc'
console.log(stringsubsets(word))