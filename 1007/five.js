function solution(n) {
    var answer = n + 1;
    let binaryNum = n.toString(2).match(/[1]/g).length;

    while (n <= 1000000) {
        let checkNum = answer.toString(2).match(/[1]/g).length;
        if (checkNum == binaryNum) break;
        answer++;
    }
    return answer;
}
let n = 78;
//result : 83

console.log(solution(n))

/**
 * 다음 큰 숫자
 *
 * */