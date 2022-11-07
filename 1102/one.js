function solution(priorities, location) {
    var answer = 0;
    let list = priorities.map((v, i) => ([v, i]));
    let max = Math.max(...priorities);

    while (priorities.length != 0) {
        let [v, i] = list.shift();
        if (v === max) {
            answer += 1;
            priorities.splice(i, 1);
            max = Math.max(...priorities);
            if (i === location) {
                break;
            }
        } else {
            list.push([v, i]);
        }
    }
    return answer;
}
//result : [2, 1]
console.log(solution([2, 1, 3, 2], 2))