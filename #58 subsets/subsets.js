function subsets(s) {
    let res = []
    let subset = []
    function backtrack(i) {
        if (i >= s.length) {
            res.push([...subset])
            return
        }
        subset.push(s[i])
        backtrack(i + 1)
        subset.pop()
        backtrack(i + 1)
    }
    backtrack(0)
    return res
}
const word = 'abc'
console.log(subsets(word))