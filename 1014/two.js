function solution(priorities, location) {
    var answer = 0;
    let map = priorities.map((item, idx) => ([idx, item]));

    while (map.length != 0) {
        let list = map.map((item) => item[1]);
        let max = Math.max(...list);
        let v = map.shift();

        if (max != v[1]) {
            map.push(v);
        } else {
            answer++;
            if (v[0] == location) break;
        }
    }
    return answer;
}

let priorities = [1, 1, 9, 1, 1, 1]
let location = 0
//result : 1
console.log(solution(priorities, location))

/**
 * 프린터
 *
*/