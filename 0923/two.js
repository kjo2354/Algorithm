function solution(n) {
    var answer = parseInt(n.toString(3).split('').reverse().join(''), 3);
    return answer;
}
let arr1 = [1,1,3,3,0,1,1];
//result [1,3,0,1]
console.log(solution(arr1))

/**
 * 3진법 뒤집기
 * 
 * 전개연산자 사용하고 배열처리한 부분..
 * parseInt({n진법}, n) 이용하여 n진법 숫자를 10진법 수로 변환 가능한 부분..
 * 
 * const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
 * */