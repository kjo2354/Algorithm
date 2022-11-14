function solution(array) {
    let obj = {};
    array.map((v) => obj[v] = (obj[v] || 0) + 1);
    let list = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    if (list.length === 1) return parseInt(list[0][0]);
    if (list[0][1] == list[1][1]) return -1;
    return parseInt(list[0][0]);
}
let m = [1]
//result : 3

console.log(solution(m));