function solution(n, m, list){
    let answer = 0;

    for(let i=0; i<n; i++) {
        let sum = list[i];
        for(let j=i+1; j<n; j++) {
            sum += list[j];
            if(sum > m) break;
            else if(sum === m) answer++;
        }
    }
    return answer;
}

let m = [1, 2, 1, 3, 1, 1, 1, 2]; //result: 3
console.log(solution(8, 6, m))