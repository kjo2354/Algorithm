function solution(lines) {
    lines.sort((a, b) => a[0] - b[0]);
    let min = Math.min(...lines.map((line) => line[0]));
    let max = Math.max(...lines.map((line) => line[1]));
    let answer = 0;
    const [x1, y1] = lines[0];
    const [x2, y2] = lines[1];
    const [x3, y3] = lines[2];

    for (let i = min; i <= max; i++) {
        if (
            (x1 < i && i < y1) &&
            (
                (x2 < i && i <= y2) ||
                (x3 < i && i <= y3)
            )
        ) {
            answer += 1;
        }
        else if (
            (x2 < i && i < y2) &&
            (
                (x1 < i && i <= y1) ||
                (x3 < i && i <= y3)
            )
        ) {
            answer += 1;
        }
        else if (
            (x3 < i && i < y3) &&
            (
                (x1 < i && i <= y1) ||
                (x2 < i && i <= y2)
            )
        ) {
            answer += 1;
        }
    }
    return answer;
}
let lines = [[0, 5], [3, 9], [1, 10]]
//result : 2
console.log(solution(lines))