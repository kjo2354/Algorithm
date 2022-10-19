function solution(k, dungeons) {
    let len = dungeons.length;
    const visited = new Array(len).fill(false);
    let clearCnt = 0;

    function dfs(k, cnt) {
        clearCnt = Math.max(clearCnt, cnt);

        for (let i = 0; i < len; i++) {
            const [minK, useK] = dungeons[i];

            if (k >= minK && !visited[i]) {
                visited[i] = true;
                dfs(k - useK, cnt + 1);
                visited[i] = false;
            }
        }
    }

    dfs(k, 0);
    return clearCnt;
}

let k = 40;
let dungeons = [[40, 20], [10, 10], [10, 10], [10, 10], [10, 10]]

//result : 4
console.log(solution(k, dungeons))
