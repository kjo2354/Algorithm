/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let rs = '';
    let obj = {};
    for(const x of s) {
        obj[x] = (obj[x] || 0) + 1;
    }
    for(const x of t) {
        if(obj[x]) {
            obj[x]--;
            obj[x] === 0 && delete obj[x];
        } else {
           return x; 
        }
    }
    
    return rs;
};
console.log(findTheDifference("abcd", "abcde"));