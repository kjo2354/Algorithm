function solution(n, m){
    let answer = Number.MIN_SAFE_INTEGER;
    let answer_sum = Number.MIN_SAFE_INTEGER;

    for(let x of m) {
        let sum = x.toString().split('').reduce((cur, next) => {
            return cur + Number(next);
        }, 0);

        if(answer_sum < sum) {
            answer_sum = sum;
            answer = x;
        } else if(answer_sum === sum) {
            answer = Math.max(answer, x)
        }
    }
    return answer;
}

let m = [128, 460, 603, 40, 521, 137, 123]; //result: 137
console.log(solution(7, m))