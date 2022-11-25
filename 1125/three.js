function solution(n) {
    if (n === 2) return 3;
    if (n === 4) return 11;
    let list = [];
    list[2] = 3;
    list[4] = 11;
    var answer = 4 * list[n - 2] - list[n - 4];
    return answer;
}
//result: 11
console.log(solution(4))