function solution(queue1, queue2) {
    let q = [...queue1, ...queue2];
    let target = q.reduce((acc, cur) => acc + cur, 0) / 2;
    let i = 0, j = queue1.length - 1;
    let curr = queue1.reduce((acc, cur) => acc + cur, 0);
    let count = 0;

    while (i < q.length && j < q.length) {
        if (curr == target) {
            return count;
        }
        else if (curr < target && j < q.length - 1) {
            j += 1;
            curr += q[j];
        }
        else {
            curr -= q[i];
            i += 1;
        }
        count += 1;
    }
    return -1;
}
//result : 2
console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]))