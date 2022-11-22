function solution(people, limit) {
    people.sort((a, b) => b - a);
    let s = 0, e = people.length - 1;
    let answer = 0;

    while (s <= e) {
        let sum = people[s] + people[e];
        if (sum <= limit) {
            e -= 1;
        }
        s += 1;
        answer += 1;
    }
    return answer;
}
//result : 3
console.log(solution([70, 50, 80, 50], 100))