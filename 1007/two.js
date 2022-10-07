function solution(s) {
    let answer = [];

    if (s[0] == ')' || s.length % 2 != 0) return false;
    for (let x of s) {
        if (x == '(') answer.push(x)
        else answer.pop();
    }
    return answer.length == 0;
}
let s = "()()";
//result : true

console.log(solution(s))