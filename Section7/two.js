function solution(n, m){
    let answer = m.slice();

    for(let i=0; i<n-1; i++) {
        for(let j=0; j<n-i-1; j++) {
            if(answer[j]>answer[j+1]) {
                [answer[j], answer[j+1]] = [answer[j+1], answer[j]];
            }
        }
        
    }
    return answer;
}

let m = [13, 5, 11, 7, 23, 15]; //result: 5 7 11 13 15 23
console.log(solution(6, m))