function solution(n, wires) {
    const links = {};
    wires.map((w) => {
        const [a, b] = w;
        if (!links[a]) links[a] = [];
        if (!links[b]) links[b] = [];
        links[a].push(b);
        links[b].push(a);
    });
    const searchTree = (root, exception) => {
        let count = 0;
        const queue = [root];
        const visited = [];
        visited[root] = true;
        while (queue.length) {
            const cur = queue.pop();
            links[cur].map((next) => {
                if (next != exception && !visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            })
            count++;
        }
        return count;
    }

    let answer = 100;
    wires.map((w, i) => {
        const [a, b] = w;
        const dif = Math.abs(searchTree(a, b) - searchTree(b, a));
        answer = answer > dif ? dif : answer;
    })
    return answer;
}
let n = 9;
let wires = [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]]
//result : 3
console.log(solution(n, wires))
//전력망 둘로 나누기