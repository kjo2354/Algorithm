function solution(bin1, bin2) {
    var answer = '';
    let bin = parseInt(bin1) + parseInt(bin2);
    let arr = [...bin.toString()];
    let add = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        let num = parseInt(arr[i]) + add;
        if (num >= 2) {
            arr[i] = num - 2;
            add = 1;
        }
        else {
            add = 0;
        }
        if (i === 0 && add === 1) {
            arr.unshift(1);
        }
    }
    return arr.join("").toString();
}
//result : "11000"
console.log(solution("1001", "1111"))
//체육복