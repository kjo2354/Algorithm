const factorial = (n) => {
    let sum = 1;
    for (let i = 2; i <= n; i++) sum *= i;
    return sum;
};

const solution = (n, k) => {
    const nums = new Array(n).fill(0).map((e, i) => (e = i + 1));
    let nth = k - 1;

    const answer = [];
    while (nums.length) {
        const fact = factorial(nums.length - 1);
        const idx = Math.floor(nth / fact);
        answer.push(nums[idx]);

        nth = nth % fact;
        nums.splice(idx, 1);
    }

    return answer;
};

//result : [3,1,2]
console.log(solution(3, 5))

/**
 * 줄 서는 방법
 *
 *
 *
 *  *  **/