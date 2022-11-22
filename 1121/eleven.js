function solution(k, m, score) {
    score.sort((a, b) => b - a);
    var answer = 0;
    while (score.length >= m) {
        let s = score.splice(0, m);
        let p = s[m - 1];
        answer += (p * m);
    }
    return answer;
}
//result : 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]))