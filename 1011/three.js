function solution(n) {
    let ans = 0;
    while (n != 0) {
        if (n % 2 == 1) {
            ans++;
            n -= 1;
        }

        n = n / 2
    }
    return ans;
}
let n = 5;
//result : 2
console.log(solution(n))

/**
 * 점프와 순간 이동
 *
 * 짝수일때는 2로 나눈 값의 연료사용 값과 같고
 * 홀수일때는 -1한 짝수의 값에서 +1한거와 같으니
 * 홀수일때 -1 해주고 ans을 +1 해주면 된다.
 * */