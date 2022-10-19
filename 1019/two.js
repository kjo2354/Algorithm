function solution(land) {
    let len = land.length
    let dp = [...land[0]]

    for (let j = 1; j < len; j++) {
        let prev = [...dp];
        for (let i = 0; i < 4; i++) {
            let prevMax = Math.max(...prev.filter((item, idx) => i != idx));
            dp[i] = prevMax + land[j][i];
        }
    }
    return Math.max(...dp);
}

let land = [[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]];

//result : 16
console.log(solution(land))

/**
 *
*/