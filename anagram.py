

def anagrams(text):
 
 dic = {}
 res=[]
 for i in range(len(text)):
     string = text[i]
     string =" ".join(sorted(string))
     if string not in dic:
         res.append(text[i])
         dic[string] =1 
 return sorted(res)
 

     