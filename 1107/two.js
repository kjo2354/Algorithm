function isPrime(v) {
    if (v === 1) return false;
    if (v % 2 === 0) return v === 2 ? true : false;
    for (let i = 3; i <= Math.sqrt(v); i += 2) {
        if (v % i === 0) return false;
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
                makeList(list, number);
            }
        }
    }
    makeList(list, '');
    return answer.length;
}
//result : 3
console.log(solution("17"))