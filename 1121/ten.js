function getCombine(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    else {
        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
            const list = getCombine(rest, selectNum - 1);
            const attached = list.map((v) => [fixed, ...v]);
            result.push(...attached);
        });
    }
    return result;
}
function solution(n, k) {
    let arr = Array.from({ length: n }, (v, i) => i + 1);
    let list = getCombine(arr, n);
    return list[k - 1];
}
//result : [3,1,2]
console.log(solution(3, 5))