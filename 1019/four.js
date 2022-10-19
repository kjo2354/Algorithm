function solution(dirs) {
    var answer = 0;
    let dirList = [];
    let current = [0, 0];

    for (let x of dirs) {
        let prev = [...current];
        switch (x) {
            case 'L':
                if (current[0] - 1 < -5) {
                    continue;
                }
                current[0] -= 1;
                break;
            case 'R':
                if (current[0] + 1 > 5) {
                    continue;
                }
                current[0] += 1;
                break;
            case 'U':
                if (current[1] + 1 > 5) {
                    continue;
                }
                current[1] += 1;
                break;
            case 'D':
                if (current[1] - 1 < -5) {
                    continue;
                }
                current[1] -= 1;
                break;
        }
        let isHave = dirList.find((item) =>
            (item[0][0] == prev[0] && item[0][1] == prev[1] &&
                item[1][0] == current[0] && item[1][1] == current[1]) ||
            (item[1][0] == prev[0] && item[1][1] == prev[1] &&
                item[0][0] == current[0] && item[0][1] == current[1])
        );
        if (isHave == undefined) {
            dirList.push([[...prev], [...current]]);
            answer++;
        }
    }
    return answer;
}
//result : 7
console.log(solution('LULLLLLLU'))

/**
 * 방문 길이
 * Map을 통해서 이동한, 이동할 위치를 key로 저장하는 방법도 좋네..
*/