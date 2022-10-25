function change124(n) {
    const list = [4, 1, 2];
    let result = '';
    while (n > 0) {
        const rest = n % 3;
        result = list[rest] + result;
        if (rest === 0) {
            n = parseInt((n - 1) / 3);
        } else {
            n = parseInt(n / 3);
        }
    }
    return result;
}
function solution(n) {
    var answer = change124(n);
    return answer;
}
//result : 1
console.log(solution(10))

/**
 * 124 나라의 숫자
 *
 *  **/