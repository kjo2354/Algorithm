function solution(numlist, n) {
    var answer = numlist
        .map((num) => [num, Math.abs(n - num)])
        .sort((a, b) => {
            if (a[1] === b[1]) {
                return b[0] - a[0];
            }
            return a[1] - b[1]
        })
        .map((v) => v[0]);
    return answer;
}
let m1 = [1, 2, 3, 4, 5, 6]
console.log(solution(m1, 4));