function solution(n) {
    let finList = Array(n).fill(0);
    finList[1] = 1;

    for (let i = 2; i <= n; i++) {
        finList[i] = finList[i - 1] % 1234567 + finList[i - 2] % 1234567;
    }

    return finList[n] % 1234567;
}
let n = 5;
//result : 2

console.log(solution(n))

/**
 * 숫자의 표현
 *
 * */