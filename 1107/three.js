function solution(brown, yellow) {
    var answer = [];

    for (let i = 1; i <= yellow; i++) {
        if (yellow % i === 0) {
            let x = (yellow / i) + 2;
            let y = (brown - (i * 2)) / 2;
            if (x === y) {
                answer = [x, (brown + yellow) / x];
                break;
            }
        }
    }
    return answer;
}
let brown = 10
let yellow = 2
//result : [4, 3]
console.log(solution(brown, yellow))