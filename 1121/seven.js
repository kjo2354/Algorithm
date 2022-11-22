function solution(numbers) {
    var answer = [];
    for (const x of numbers) {
        let t = x.toString(2);
        let s = x + 1;
        while (true) {
            let c = s.toString(2);
            let len = c.toString().length;

            let cnt = [...('0'.repeat(len - t.length) + t)].filter((v, i) => v != c[i]).length;
            if (cnt == 2 || cnt == 1) {
                answer.push(s);
                break;
            }
            s += 1;
        }
    }
    return answer;
}
//result : [3,11]
console.log(solution([2, 7]))