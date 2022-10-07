function solution(brown, yellow) {
    var answer = [];
    let x, y;

    for (let i = 1; i <= yellow; i++) {
        if (yellow % i == 0) {
            x = (yellow / i) + 2;
            y = (brown - (i * 2)) / 2;
            if (x == y) {
                answer = [x, (brown + yellow) / x];
                break;
            }
        }
    }
    return answer;
}
let brown = 24;
let yellow = 24;
//result : [4, 3]

console.log(solution(brown, yellow))

/**
 * 카펫
 *
 * */