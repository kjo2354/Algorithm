function solution(n, m){
    let answer = m.slice();

    for(let i=1; i<n; i++) {
        let cur = answer[i], j;
        for(j=i-1; j>=0; j--) {
           if(answer[j] > cur) answer[j+1] = answer[j];
           else break;
        }
        answer[j+1] = cur;
    }
    return answer;
}

let m = [13, 5, 11, 7, 23, 15]; //result: 5 7 11 13 15 23
console.log(solution(6, m))