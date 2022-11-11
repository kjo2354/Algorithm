function makeNumber(list, select) {
    const result = [];
    if (select === 1) return list.map((element) => [element]);
    list.forEach((fixed, index, origin) => {
        const restCombinations = makeNumber(origin.slice(index + 1), select - 1);
        const attached = restCombinations.map((restCombination) => [fixed, ...restCombination].join(''));
        result.push(...attached);
    });
    return result;
}
function solution(number, k) {
    var answer = '';
    let arr = new Set();

    for (let i = 0; i < number.length; i++) {
        let list = [...number].slice(i, i + k + 1);
        let com = makeNumber(list, k);
        com.map((item) => arr.add(item));
    }
    answer = Math.max(...arr);
    return answer;
}
let number = "1924";
let k = 2;
//result : "94"
console.log(solution(number, k))
//큰 수 만들기