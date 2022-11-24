function getPrimeCount(num, limit, power) {
    if (num === 1) return 1;
    let cnt = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            cnt += 1;
            if (Math.pow(i, 2) !== num) {
                cnt += 1;
            }
        }
    }
    return cnt > limit ? power : cnt;
}
function solution(number, limit, power) {
    let arr = Array.from({ length: number }, (v, i) => getPrimeCount(i + 1, limit, power));
    var answer = arr.reduce((acc, cur) => acc + cur, 0);
    return answer;
}
//result 10
console.log(solution(10, 3, 2))