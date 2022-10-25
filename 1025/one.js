function solution(numbers) {
    var answer = numbers.map(c => c + '').
        sort((a, b) => (b + a) - (a + b)).join('');

    return answer[0] === '0' ? '0' : answer;
}
let numbers = [3, 30, 34, 5, 9]
console.log(solution(numbers))

/**
 * 가장 큰 수
 * 두개를 합쳤을때를 비교하면 되는구나...
 **/