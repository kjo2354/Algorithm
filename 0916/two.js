function solution(arr, divisor) {
    let answer = arr.sort((a, b) => a - b).filter((v) => v % divisor == 0);
    if (answer.length == 0) return [-1];
    else return answer;
}

let m = [4, 3, 2, 1];
console.log(solution(m))

/**
 *
 * 나누어 떨어지는 숫자 배열
 *
    function solution(arr, divisor) {
        var answer = arr.filter(v => v%divisor == 0);
        return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
    }

    -return시 삼항연산자로 사용한 부분
    -sort 보다 filter를 먼저하는게 성능 측면에서 더 좋을거 같다..
 * */