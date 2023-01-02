/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let obj = {};
    let m = 'A';
    for(let i=0;i<26;i++) {        
        obj[m] = (i + 1);
        m = String.fromCharCode(m.charCodeAt(0) + 1);
    }
    let result = 0;
    for(let i=0;i<columnTitle.length;i++){
        let m = columnTitle[i];
        let x = columnTitle.length - i - 1;
        result += (Math.pow(26, x) * obj[m]);
    }
    return result;
};
console.log(titleToNumber("FXSHRXW"));