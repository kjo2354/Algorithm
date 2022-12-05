function solution(s) {
    var answer = 0;
    let x = s[0];
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        if (x === s[i]) {
            count += 1;
        } else {
            count -= 1;
        }

        if (count === 0) {
            answer += 1;
            x = s[i + 1];
        }
    }
    if (count != 0) answer += 1;
    return answer;
}
//result : 3
console.log(solution("banana"))