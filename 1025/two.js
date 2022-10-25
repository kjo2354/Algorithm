function isPrime(n) {
    if (n == 1) return false;
    if (n % 2 == 0) return n == 2 ? true : false;

    for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
        if (n % i == 0) return false;
    }
    return true;
}
function solution(numbers) {
    var answer = [];
    let list = numbers.split('');

    function makeList(arr, num) {
        if (arr.length == 0) return;
        else {
            for (let i = 0; i < arr.length; i++) {
                const number = num + arr[i];
                const list = [...arr];
                list.splice(i, 1);
                if (!answer.includes(+number) && isPrime(+number)) {
                    answer.push(+number);
                }
                makeList(list, number)
            }
        }
    }
    makeList(list, '');
    return answer.length;
}
let numbers = "011"
//result : 3
console.log(solution(numbers))

/**
 * 소수 찾기
 * 경우에 맞는 수를 찾는 방법은 dfs
 **/