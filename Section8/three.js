function solution(n, k, list, m){
    let copy = list.slice();
    let answer = 0;

    function dfs(index, start, sum) {
        if(index === k) {
            if(sum%m === 0) answer++;
        }
        else {
            for(let i=start; i<n; i++) {
                dfs(index+1, i+1, sum+copy[i]);
            }
        }
    }

    dfs(0, 0, 0);
    return answer;
}

let m = [2, 4, 5, 8, 12]; //result: 2
console.log(solution(5, 3, m, 6))