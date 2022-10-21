function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let ingQueue = [];
    let endQueue = [];
    let maxLength = truck_weights.length;

    for (let time = 1; time <= maxLength * bridge_length + 1; time++) {
        if (ingQueue.length > 0) {
            endQueue = [...endQueue, ...ingQueue.filter((item) => time - item[1] == bridge_length)];
            ingQueue = ingQueue.filter((item) => time - item[1] < bridge_length);
        }

        let ingWeight = ingQueue.reduce((acc, cur) => acc + cur[0], 0);
        if (ingWeight + truck_weights[0] <= weight) {
            ingQueue.push([truck_weights.shift(), time]);
        }

        if (endQueue.length == maxLength) {
            answer = time;
            break;
        }
    }
    return answer;
}

console.log(solution(100, 100, [10]))