function solution(list){
    let answer = 0;
    let copy = Array.from({length: list.length+2}, ()=>[1, 1, 1, 1, 1, 1, 1, 1, 1]);
    let last = copy.length - 2;
    
    for(let i=1; i<copy.length-1; i++){
        for(let j=1; j<copy.length-1; j++) {
            copy[i][j] = list[i-1][j-1];
        }
    }

    let dx=[-1, 0, 1, 0];
    let dy=[0, 1, 0, -1];

    function dfs(x, y) {
        if(x === last && y === last) {
            answer++;
        } else {
            for(let k=0; k<4; k++){
                let nx=x+dx[k];
                let ny=y+dy[k];
                if(copy[nx][ny] === 0){
                    copy[nx][ny]=1;
                    dfs(nx, ny);
                    copy[nx][ny]=0;
                }
            }
        }
    }
    copy[1][1]=1;
    dfs(1, 1)
    return answer;
}

let m = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0]
]; //result: 8
console.log(solution(m))