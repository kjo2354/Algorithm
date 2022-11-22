function solution(s) {
    let answer = '';
    let index = 0;
    for (const x of s) {
        if (x === ' ') {
            index = 0;
            answer += ' ';
        } else {
            if (index % 2 === 0) {
                answer += x.toUpperCase();
            } else {
                answer += x.toLowerCase();
            }
            index += 1;
        }
    }
    return answer;
}
//result : "TrY HeLlO WoRlD"
console.log(solution("try    hello world"))