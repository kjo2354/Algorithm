function solution(num, total) {
    var answer = [];
    let mid = total / num;
    if (Number.isInteger(mid)) answer.push(mid);
    let i = 1;
    while (answer.length != num) {
        let min = Math.ceil(mid - i);
        let plus = Math.floor(mid + i);
        answer.push(min);
        answer.push(plus);
        i++;
    }
    return answer.sort((a, b) => a - b);
}
let num = 3;
let total = 12;
//result : [3,4,5]
console.log(solution(num, total))