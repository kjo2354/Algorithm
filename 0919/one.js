function solution(n) {
    var answer = '';
    for(let i=0; i<n; i++) {
        answer += (i%2 == 0 ? '수' : '박')
    }
    return answer;
}

let m = 3;
console.log(solution(m))

/**
 * 수박수박수박수박수박수?
 * 주어진 n 숫자 만큼 수박을 반복하는 문제
 * const waterMelon = n => "수박".repeat(n).slice(0,n);
 * 
 * string repeat 함수
 * ex) let text = "Hello world!";
 * let result = text.repeat(2); //Hello world!Hello world!
 * 
 * 이렇게 해당 문자열을 주어진 수만큼 반복 시켜주기 때문에 
 * 위에 답안은 간결한 코드가 될 수 있다. 반복 후 제거
 * /