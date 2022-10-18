function solution(n, t, m, p) {
    var answer = '';
    let count = 0, i = 0;

    while (true) {
        let q = i.toString(n);
        for (let j = 0; j < q.length; j++) {
            if (answer.length == t) return answer;
            if (count % m == (p - 1)) answer += q[j].toUpperCase();
            count++;
        }
        i++;
    }
}

let n = 2
let t = 4
let m = 2
let p = 1
console.log(solution(n, t, m, p))

/**
 * [3차] n진수 게임
 * t가 1000 보다 작으니 무조건 true 조건보다
 * answer.legnth 조건을 걸어주는게 좋았을거 같다
 *
*/