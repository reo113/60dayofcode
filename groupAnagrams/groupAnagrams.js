var groupAnagrams = function (strs) {
  const map = new Map();
  for (let s of strs) {
    let cur = s.split("").sort().join("");
    if (map.has(cur)) {
      let value = map.get(cur);
      value.push(s);
      map.set(cur,value)
    } else {
      map.set(cur, [s]);
    }
  }
  return Array.from(map.values());
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
