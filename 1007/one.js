function solution(s) {
    let count = 0;
    let removeCnt = 0;

    while (s != 1) {
        let zeroCnt = s.split('').filter((item) => item == 0).length;
        s = s.replace(/[0]+/g, '');
        s = s.length.toString(2);
        removeCnt += zeroCnt;
        count++;
    }

    return [count, removeCnt];
}
let s = '110010101001';
//result : [3,8]

console.log(solution(s))

/**
 * 이진 변환 반복하기
 *
 * match를 써도 된다!!!
 *
 * function solution(s) {
    var answer = [0,0];
    while(s.length > 1) {
        answer[0]++;
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}
 * */