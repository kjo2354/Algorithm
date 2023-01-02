/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false
    let map = new Map();
    let set = new Set();
    for(let g=0; g<s.length; g++){
        if(map.has(s[g])){
            if(map.get(s[g]) != t[g]) return false
        }
        else if (set.has(t[g])  )return false
        set.add(t[g])
        map.set(s[g], t[g])  
    }
    return true
};
//s = "egg", t = "add"
console.log(isIsomorphic("aa", "bb"));