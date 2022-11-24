function solution(order) {
    var answer = 0;
    let set = new Set(order);
    let list = [...set].sort((a, b) => b - a);
    for (let i = 0; i < list.length; i++) {
        if (order[0] == list[i]) {
            let cnt = 0;
            for (let j = 0; j < order.length; j++) {
                if (order[j] == list[i + j]) cnt += 1;
            }
            answer = Math.max(answer, cnt);
        }
    }
    return answer;
}

console.log(solution([5, 4, 3, 2, 1]));