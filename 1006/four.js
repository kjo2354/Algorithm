function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    let answer = A.reduce((acc, cur, idx) => acc + (cur * B[idx]), 0);
    return answer;
}

let a = [1, 2]
let b = [3, 4]
//result : 29
console.log(solution(a, b))

/**
 * 최솟값 만들기
 * sort 콜백 비교 기준은 유니코드로 비교하기 때문에 sort()만 쓰면 두자리 이상에서는 정렬 오류가 있을 수 있다!
 * */