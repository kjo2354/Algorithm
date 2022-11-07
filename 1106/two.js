function solution(numbers) {
    var answer = numbers.map(c => c + '').
        sort((a, b) => (b + a) - (a + b)).join('');

    return answer[0] === '0' ? '0' : answer;
}
let m1 = [6, 10, 2]         //result : "6210"
let m2 = [3, 30, 34, 5, 9]	//result : "9534330"
console.log(solution(m2))