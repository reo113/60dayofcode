let encode = (str) => {
    let ret = ""
    for (let i = 0; i < str.length; i++) {
        ret += str[i] + ';'
    }
    return ret.substring(0, ret.length - 1)
}

let decode = (words) => {
    let l = 0;
    let arr = []
    for (let i = 0; i< words.length; i++) {
        if (words[i] === ';') {
            if (words[i + 1] === ';') {
                continue;
            }
            let word = words.slice(l, i)
            arr.push(word)
            l = i + 1
        }
    }
    arr.push(words.slice(l, words.length))
    return arr

}
let str = ["lint", "code", "love", "you"]

let w = encode(str)
console.log(decode(w))