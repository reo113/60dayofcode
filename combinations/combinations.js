function combination(n, k) {
    let res = []
    let combo=[]
    function backtrack(i) {
        if (combo.length === k) {
            res.push([...combo])
            return
        }
        for (let j = i; j < n+1; j++) {
            combo.push(j)
            backtrack(j+1)
            combo.pop();
        }

    }
    backtrack(1)
    return res
}
console.log(combination(4, 2))