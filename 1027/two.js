function getCombinations(array, selectNum) {
    let result = [];
    if (selectNum === 1) return array.map((item) => [item]);
    array.forEach((fixed, index, origin) => {
        let restCombinations = getCombinations(origin.slice(index + 1), selectNum - 1);
        let combinations = restCombinations.map((item) => [fixed, ...item]);
        result.push(...combinations);
    });
    return result;
}
function solution(numbers) {
    return [...new Set(getCombinations(numbers, 2).map(combi => combi[0] + combi[1]))].sort((a, b) => a - b)
}

let numbers = [2, 1, 3, 4, 1];
//result : [2,3,4,5,6,7]
console.log(solution(numbers))


/**
 * function combinations(arr, n) {
    if (n === 1) return arr.map((v) => [v]);
    const result = [];

    console.log("arr", arr)
    arr.forEach((fixed, idx, arr) => {
        const rest = arr.slice(idx + 1);
        console.log("rest", rest)
        const combis = combinations(rest, n - 1);
        console.log("combis", combis)
        const combine = combis.map((v) => [fixed, ...v]);
        console.log("combine", combine)
        result.push(...combine);
    });

    console.log("result", result)
    return result;
}

function solution(numbers) {
  // 1. 조합을 구한다. n 개중 2개
  // 2. 조합의 합을 구한다.
  // 3. 중복을 제거한다.
  // 4. 오름차순 정렬한다.
  return [...new Set(combinations(numbers, 2).map(combi => combi[0] + combi[1]))].sort((a, b) => a - b);
 *
 *
 */