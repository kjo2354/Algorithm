function solution(n, times) {
    const sortedTimes = times.sort((a, b) => a - b);
    let left = 1;
    let right = sortedTimes[sortedTimes.length - 1] * n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        //sum ([시간 / 심사시간]) : 이용자 수
        const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

        if (sum < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left
}
//result : 28
console.log(solution(6, [7, 10]))