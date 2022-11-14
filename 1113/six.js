function solution(quiz) {
    var answer = [];
    for (const q of quiz) {
        let [a, b] = q.split('=');
        answer.push(eval(a) == parseInt(b) ? 'O' : 'X');
    }
    return answer;
}
console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));