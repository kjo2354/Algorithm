/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    let words = s.split(' ');
    if(pattern.length !== words.length) return false;
    
    let map = {}, keyset = {};
    for(let i = 0; i<pattern.length; i++) {
        let x = pattern[i];
        let v = words[i];
        if(!map[x]) {
            map[x] = v;
        } else {
            if(map[x] != v) return false;
        }

        if(!keyset[v]) {
            keyset[v] = x;
        } else {
            if(keyset[v] != x) return false;
        }
    }
    return true;
};

console.log(wordPattern("abba", "dog dog dog dog"));