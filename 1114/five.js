function solution(lines) {
    var answer = 0;
    const [x1, y1] = lines[0];
    const [x2, y2] = lines[1];
    const [x3, y3] = lines[2];

    if (x1 >= x2 && x1 <= y2) {

    }
    if (x1 >= x3 && x1 <= y3) {

    }


    return answer;
}
let lines = [[0, 1], [2, 5], [3, 9]];
//result : 2
console.log(solution(lines))