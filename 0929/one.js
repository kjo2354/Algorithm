function isPrime(n) {
    if (n <= 1) return 0;
    if (n % 2 == 0) return n == 2 ? 1 : 0;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) return 0;
    }
    return 1;
}
function solution(n) {
    var answer = 0;

    for (let i = 2; i <= n; i++) {
        answer += isPrime(i);
    }
    return answer;
}

let m = 10; //result : 4
let m1 = 5; //result : 3
console.log(solution(m))

/**
 * 소수 찾기
 *
 *
 *
 * */