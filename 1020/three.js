function solution(maps) {
    var answer = Number.MAX_SAFE_INTEGER;
    let target = [maps[0].length, maps.length];
    let list = Array.from(Array(maps.length + 2), () => new Array(maps[0].length + 2).fill(0));
    for (let i = 1; i < list.length - 1; i++) {
        for (let j = 1; j < list[0].length - 1; j++) {
            list[i][j] = maps[i - 1][j - 1];
        }
    }

    let queue = [];
    queue.push([1, 1, 1]);

    while (queue.length != 0) {
        let [pointY, pointX, count] = queue.shift();

        if (pointX == target[0] && pointY == target[1]) {
            return count;
        }
        let dx = [1, -1, 0, 0];
        let dy = [0, 0, 1, -1];

        for (let i = 0; i < 4; i++) {
            let point = [pointX + dx[i], pointY + dy[i]];
            if (list[point[1]][point[0]] == 1) {
                list[pointY][pointX] = 0;
                queue.push([point[1], point[0], count + 1]);
            }
        }
    }
    return -1
}

let maps = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1]
];
let maps2 = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1]
];
//result : 11
console.log(solution(maps2))
