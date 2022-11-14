function solution(A) {
    let answer = [...A].sort((a, b) => a - b);

    return answer[0];
}
//result : 7
console.log(solution([9, 3, 9, 3, 9, 7, 9]))
//체육복