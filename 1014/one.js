function solution(n, left, right) {
    var answer = [];
    for (let i = left; i <= right; i++) {
        answer.push(Math.max(parseInt(i / n), i % n) + 1);
    }
    return answer;
}

let n = 4;
let left = 7;
let right = 14;
//result : [4,3,3,3,4,4,4,4]
console.log(solution(n, left, right))

/**
 * n^2 배열 자르기
 *
 * 규칙 찾기..
 *
*/