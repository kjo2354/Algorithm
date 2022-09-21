function chkDiv(n) {
    let count = 0;
    for(let i=1; i<=n; i++) {
        if(n%i == 0) count++;
    }
    return count%2 == 0 ? 1 : -1;
}
function solution(left, right) {
    var answer = Array.from({length:right-left+1},(v,i)=>left+i).reduce((pre, cur)=> pre + cur * chkDiv(cur), 0);
    
    return answer;
}
let n = 13;
let m = 17; //result : 43
console.log(solution(n, m))

/**
 * 약수의 개수와 덧셈
 * 
 * 수학적인 접근이지만 제곱근이 정수이면 홀수 / 아니면 짝수를 이용..
 * function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
 * */