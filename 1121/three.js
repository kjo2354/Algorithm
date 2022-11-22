function getCombine(arr, selectNum) {
    let result = [];
    if (selectNum == 1) return arr.map((v) => [v]);
    else {
        arr.forEach((fixed, index, origin) => {
            const rest = getCombine(origin.slice(index + 1), selectNum - 1);
            const attached = rest.map((v) => [fixed, ...v]);
            result.push(...attached);
        });
    }
    return result;
}
function solution(number) {
    var answer = 0;
    let combinations = getCombine(number, 3);
    for (const combination of combinations) {
        const [a, b, c] = combination;
        if ((a + b + c) === 0) answer += 1;
    }
    return answer;
}
//result : 2
console.log(solution([-3, -2, -1, 0, 1, 2, 3]))