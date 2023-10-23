function validParenthesis(string) {
    const stack = [];
    const lookup = { ')': '(', ']': '[', '}': '{' }
    for (let char of string) {
        if (lookup[char]) {
            if (stack.length > 0 && lookup[char] ===  stack[stack.length - 1]) {
                stack.pop();
            }
            else {
                return false;
            }
        } else {
            stack.push(char)
        }
    }

    return stack.length === 0;
}

let s = "([]])";
console.log(validParenthesis(s))