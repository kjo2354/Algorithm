function solution(score) {
    let grade = 0, duple = 1;
    let list = score
        .map(([m, e], idx) => [idx, (m + e) / 2])
        .sort((a, b) => b[1] - a[1]);
    list.reduce((acc, cur, idx) => {
        if ((acc[1] != cur[1])) {
            grade += duple;
            duple = 1;
        } else {
            duple += 1;
        }
        list[idx][3] = grade;
        return cur;
    }, [0, 0]);
    return list.sort((a, b) => a[0] - b[0]).map((v) => v[3]);
}
let m1 = [[80, 70], [90, 50], [40, 70], [50, 80]];
//result : [1, 2, 4, 3]
let m2 = [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]];
//result : [4, 4, 6, 2, 2, 1, 7]
let m3 = [[1, 2], [1, 1], [1, 1]];
//result : [1, 2, 2]
console.log(solution(m3))