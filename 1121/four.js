function solution(a, b, n) {
    var answer = 0;
    while (n >= a) {
        let m = parseInt(n / a) * b;
        let r = n % a;
        n = (r + m);
        answer += m;
    }
    return answer;
}
//result : 19
console.log(solution(2, 1, 20))