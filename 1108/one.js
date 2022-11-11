function solution(n, lost, reserve) {
    let clothes = Array(n).fill(1);
    lost.map((item) => clothes[item - 1] = 0);
    reserve.map((item) => clothes[item - 1] += 1);

    for (let i = 0; i < n; i++) {
        if (clothes[i] === 0 && clothes[i - 1] === 2) {
            clothes[i] = 1;
            clothes[i - 1] = 1;
        } else if (clothes[i] === 0 && clothes[i + 1] === 2) {
            clothes[i] = 1;
            clothes[i + 1] = 1;
        }
    }
    return clothes.filter((c) => c > 0).length;
}
let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5];
//result : 5
console.log(solution(n, lost, reserve))
//체육복