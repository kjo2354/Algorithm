function solution(n, m){
    let answer = m.slice();

    for(let i=0; i<n; i++) {
        let cur = i;
        for(let j=i+1; j<n; j++) {
            if(answer[cur] > answer[j]) cur = j;
        }

        [answer[i], answer[cur]] = [answer[cur], answer[i]];
    }
    return answer;
}

let m = [13, 5, 11, 7, 23, 15]; //result: 5 7 11 13 15 23
console.log(solution(6, m))