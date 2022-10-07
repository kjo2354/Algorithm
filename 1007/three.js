function solution(n) {
    var answer = 1; //n 한개만 선택했을때 
    let sqrtNum = Math.ceil(n / 2);
    for (let p1 = 1; p1 < sqrtNum; p1++) {
        let sum = 0;
        for (let p2 = p1; p2 <= sqrtNum; p2++) {
            sum += p2;
            if (sum >= n) {
                (sum == n) && answer++;
                break;
            }
        }
    }
    return answer;
}
let n = 15;
//result : 4

console.log(solution(n))

/**
 * 숫자의 표현
 *
 * */