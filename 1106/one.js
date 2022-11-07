function solution(array, commands) {
    var answer = [];

    for (const command of commands) {
        const [i, j, k] = command;
        const item = [...array].slice(i - 1, j).sort()[k - 1];
        answer.push(item);
    }
    return answer;
}
//result : [5, 6, 3]
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))