function solution(answers) {
    let maxScore = 0;
    let people = {
        '1': 0,
        '2': 0,
        '3': 0,
    }
    let person1 = [1, 2, 3, 4, 5];
    let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var answer = [];

    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i];
        people['1'] += person1[i % 5] === answer ? 1 : 0;
        people['2'] += person2[i % 8] === answer ? 1 : 0;
        people['3'] += person3[i % 10] === answer ? 1 : 0;
    }

    maxScore = Math.max(...Object.values(people));
    for (const [k, v] of Object.entries(people)) {
        if (maxScore === v) {
            answer.push(k);
        }
    }
    return answer.sort().map(item => parseInt(item));
}
//result : [1]
console.log(solution([1, 3, 2, 4, 2]))