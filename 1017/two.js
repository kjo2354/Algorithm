function isPrime(n) {
    if (n <= 1) return 0;
    if (n % 2 == 0) return n == 2 ? 1 : 0;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) return 0;
    }
    return 1;
}
function solution(n, k) {
    var answer = 0;
    let num = n.toString(k);

    num.replace(/[0]+/g, ' ').split(' ').map((item) => {
        answer += isPrime(item);
    })
    return answer;
}

console.log(solution(110011, 10))

/**
 * k진수에서 소수 개수 구하기
 *
 * 소수 찾는 function은 암기!!
 * 굳이 0을 공백으로 replace하지 말고 바로 split했어도 됐음!
*/