function longestcommonsubsequence(str1, str2) {
    let min = str1.length <= str2.length ? str1 : str2;
    let max = str1.length > str2.length ? str1 : str2;
    const common =[]
    for (let i = 0; i < min.length; i++) {
        if (max.includes(min[i])) {
            common.push(min[i]);
        }

    }
    return common.join('').length;

}

let text1 = "abc"
let text2 = "def"
console.log(longestcommonsubsequence(text1, text2));