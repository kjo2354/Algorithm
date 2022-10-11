function solution(n, a, b) {
    var answer = 0;

    while (n != 1) {
        answer++;

        if ((a % 2 == 0 && (a - 1) == b) || (b % 2 == 0 && a == (b - 1))) break;
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        n = parseInt(n / 2);
    }
    return answer;
}
let N = 8;
let A = 4;
let B = 7;
//result : 3
console.log(solution(N, A, B))
