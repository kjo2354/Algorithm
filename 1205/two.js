function solution(cards) {
    var answer = 0;
    let array = [];
    let visited = Array.from({ length: cards.length }, () => false);
    function dfs(list, index) {
        if (visited[index - 1]) {
            return;
        }
        visited[index - 1] = true;
        list.push(index);
        let next = cards[index - 1];
        dfs(list, next);
    }
    for (let i = 0; i < cards.length; i++) {
        array[i] = [];
        dfs(array[i], i + 1);
    }
    array.sort((a, b) => b.length - a.length);
    return array[0].length * array[1].length;
}
//result : 12
console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]))