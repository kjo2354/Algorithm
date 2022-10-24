function solution(want, number, discount) {
    var answer = 0;
    let days = discount.length - 9;

    let buyObj = {};
    want.map((item, idx) => (buyObj[item] = number[idx]));

    for (let i = 0; i < days; i++) {
        let obj = { ...buyObj };
        let chk = discount.slice(i, i + 10);
        chk.map((item) => obj.hasOwnProperty(item) && obj[item]--);
        let result = Object.keys(obj).every((item) => obj[item] <= 0);
        if (result) answer++;
    }
    return answer;
}
let want = ["banana", "apple", "rice", "pork", "pot"]
let number = [3, 2, 2, 2, 1]
let discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]
// let discount = ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]
//result: 3
console.log(solution(want, number, discount))

/**
 * 할인 행사
 *
 **/