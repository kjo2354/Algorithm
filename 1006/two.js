function solution(s) {
    var answer = '';
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    for (let x of s.split(' ')) {
        min = Math.min(min, x);
        max = Math.max(max, x);
    }
    return `${min} ${max}`;
}

let s = "-1 -2 -3 -4";
//result : "1 4"
console.log(solution(s))

/**
 * 최댓값과 최솟값
 *
 * 스프레드 연산자! 사용하자~
 *
 * function solution(s) {
    const arr = s.split(' ');

    return Math.min(...arr)+' '+Math.max(...arr);
}
 * */