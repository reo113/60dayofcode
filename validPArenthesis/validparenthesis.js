function validParenthesis(string) {
  const stack = [];
  for (let char of string) {
    if(char === '(' || char === '[' || char ==='{'){
        stack.push(char);
    }else if(char === ')' || char === ']' || char ==='}'){
        const pop = stack.pop();

        switch(pop){
            case '(':
                if(char === ')') {
                    continue;
                }else return false;
                break;
            case '[':
                if(char === ']') {
                    continue;
                }else return false;
                break;
            case '{':
                if(char === '}') {
                    continue;
                }else return false;
                break;
            default:
                return false;
        }
    }

  }
return stack.length == 0; 
}

let s = "((";
console.log(validParenthesis(s))