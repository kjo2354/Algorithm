function solution(k, tangerine) {
    var answer = 0;
    let list = [];
    for (const x of tangerine) {
        let v = list[x];
        if (v == undefined) {
            v = [x, 1];
        } else {
            v[1] += 1;
        }
        list[x] = v
    }
    list.sort((a, b) => b[1] - a[1]);
    for (const item of list) {
        let [key, c] = item;
        k -= c;
        answer += 1;
        if (k <= 0) {
            break;
        }
    }
    return answer;
}
//result : 3
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]))