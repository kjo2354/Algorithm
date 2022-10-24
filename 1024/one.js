function solution(n) {
    let list = [];
    list[0] = 0;
    list[1] = 1;

    for (let i = 2; i <= n + 1; i++) {
        list[i] = (list[i - 1] + list[i - 2]) % 1000000007
    }
    return list[n + 1] % 1000000007;
}

//result: 5
console.log(solution(3))

/**
 * 2 x n 타일링
 **/