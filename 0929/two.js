function isPrime(n) {
    if (n == 1) return false;
    if (n % 2 === 0) return n == 2 ? true : false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }

    return true;
}
function solution(nums) {
    var answer = 0;

    if (nums.length === 3) {
        let sum = nums.reduce((acc, cur) => acc + cur, 0);
        answer = isPrime(sum) ? 1 : 0;
        return answer;
    }

    function dfs(i, count, acc) {
        if (count == 3) {
            if (isPrime(acc)) {
                answer++;
            }
            return;
        }
        if (i == nums.length) return;

        dfs(i + 1, count + 1, acc + nums[i]);
        dfs(i + 1, count, acc);
    }

    dfs(0, 0, 0)
    return answer;
}

let m = [1, 2, 3, 4]; //result : 1
let m1 = [1, 2, 7, 6, 4]; //result : 4
console.log(solution(m))

/**
 * 소수 만들기
 *
 * 선택하고 안하고를 따져서 재귀 돌렸음
 * 소수 체크하는 문제는 자주 나오니 isPrime 함수는 외워야할듯..
 *
 * */