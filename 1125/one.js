function solution(k, score) {
    var answer = [];
    let list = [];

    for (let i = 0; i < score.length; i++) {
        let v = score[i];
        if (list.length < k) {
            list.push(v);
        } else if (list[0] < v) {
            list[0] = v;
        }
        list.sort((a, b) => a - b);
        answer.push(list[0]);
    }
    return answer;
}
//result : [10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]))