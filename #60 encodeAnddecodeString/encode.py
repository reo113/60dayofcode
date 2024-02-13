def decode(words):
    l =0
    arr =[]
    for i in range(len(words)):
        if words[i] == ';':
            if words[i+1] == ';': continue
        w = words[l:i]
        arr.append(w)
        l =l+1
    return arr
            

def encode(strings):
    ret =""
    for s in strings:
        ret += s +';'
    return ret[:-1]


    
    
    
    
    
strs = ["lint", "code", "love", "you"]
word = encode(strs)
print(decode(word))