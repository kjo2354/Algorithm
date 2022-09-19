function solution(a, b) {
    var answer = 0;
    for(let i=0; i<a.length; i++) {
        answer += (a[i] * b[i]);
    }
    return answer;
}
let n = [1,2,3,4];
let m = [-3,-1,0,2];
//result 3 
console.log(solution(n, m))

/**
 * 내적
 * 같은 크기의 배열이 주어졌을때 계산
 * function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
   }
 * reduce를 이용할 수 있는데 reduce는 (acc, cur, index, array) 순으로 
   (누계, 현재, 인덱스, 전체)
 * /