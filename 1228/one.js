/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
    const strMatch = {};
    let str = 'A'.charCodeAt(0);
    for(let i = 1; i<=26; i++) {
        strMatch[i] = String.fromCharCode(str);
        str += 1;
    }
    strMatch[0] = 'Z';
    console.log(strMatch);
    let result = '';
    while(columnNumber != 0) {
        let m = parseInt(columnNumber / 26);
        let r = columnNumber % 26;
        result += strMatch[r];
        columnNumber = m;
    }
    return result;
};

console.log(convertToTitle(2147483647));