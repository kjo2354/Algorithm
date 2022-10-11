function solution(n) {
    let list = Array(n + 1).fill(0);
    list[0] = 1;
    list[1] = 1;

    for (let i = 2; i <= n; i++) {
        list[i] = (list[i - 1] + list[i - 2]) % 1234567;
    }
    return list[n] % 1234567;
}
let n = 8;
//result : 5
console.log(solution(n))

/**
 * 멀리 뛰기
 * dp로 누적되면서 풀면 되는 문제
 *
 * */