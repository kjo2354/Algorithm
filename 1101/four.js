// 핵심 키워드는 "노드", "간선", "최단경로"
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

function solution(n, edge) {
    const graph = Array.from(Array(n + 1), () => []);
    //그래프 완성
    for (const [src, dest] of edge) {
        graph[src].push(dest);
        graph[dest].push(src);
    }

    const distance = Array(n + 1).fill(0);
    distance[1] = 1;

    // BFS 
    const queue = [1];
    while (queue.length > 0) {
        const src = queue.shift();
        for (const dest of graph[src]) {
            if (distance[dest] === 0) {
                queue.push(dest);
                distance[dest] = distance[src] + 1
            }
        }
    }

    const max = Math.max(...distance);
    return distance.filter((item) => item === max).length
}
//result : 3
console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]))