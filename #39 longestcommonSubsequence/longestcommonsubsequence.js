function lcs(str1, str2) {
    const dp = new Array(str1.length + 1).fill(0).map(() => new Array(str2.length + 1).fill(0))

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                dp[i + 1][j + 1] = 1 + dp[i][j]
            } else {
                dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1])
            }
        }
    }

    return dp[str1.length][str2.length]
}
let text1 = "ezupkr"
let text2 = "ubmrapg"
console.log(lcs(text1, text2))