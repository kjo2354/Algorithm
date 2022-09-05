function solution(m){
    let answer = Number.MIN_SAFE_INTEGER;
    let copy = m.slice();
    let first_child = copy.shift();
    let n = first_child[0];;
    let maxTime = first_child[1];

    function dfs(index, sum, time) {
        if(time > maxTime) return;
        else if(index === n) answer = Math.max(answer, sum)
        else {
            dfs(index+1, sum+copy[index][0] ,time + copy[index][1]);
            dfs(index+1, sum, time)
        }
    }

    dfs(0, 0, 0);
    return answer;
}

let m = [
    [5, 20], 
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4]
]; 
//result: 41
console.log(solution(m))