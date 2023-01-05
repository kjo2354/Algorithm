/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let obj = {};

    for(let i=0; i<s.length; i++) {
        let v = s[i];
        obj[v] = (obj[v] || 0) + 1;
    }

    for(const [k, v] of Object.entries(obj)) {
        if(v === 1) {
            return s.indexOf(k);
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));