function solution(n){
    let answer = 0;
    let array = Array.from({length:n+2}, ()=>0);
    array[1] = 1;
    array[2] = 2;
    
    for(let i=3; i<=n+1; i++) {
        array[i] = array[i-1] + array[i-2];
    }

    answer = array[n+1];
    return answer;
}

let m = 7; //result: 34
console.log(solution(m))