function solution(k, dungeons) {
    let visited = Array.from({ length: dungeons.length }).fill(false);
    var answer = 0;

    function dfs(k, cnt) {
        answer = Math.max(answer, cnt);

        for (let i = 0; i < visited.length; i++) {
            const [need, dis] = dungeons[i];

            if (visited[i] === false && k >= need) {
                visited[i] = true;
                dfs(k - dis, cnt + 1);
                visited[i] = false;
            }
        }
    }
    dfs(k, 0)
    return answer;
}
//result : 3
console.log(solution(80, [[80, 20], [50, 40], [30, 10]]))