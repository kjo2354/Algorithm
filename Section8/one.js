function changeBinary(n) {
    let mok = Number.parseInt(n/2);
    let rest = n%2;

    if(mok === 0) return rest;
    else { 
        let result = changeBinary(mok);
        result += String(rest); 
        return result;
    };
}

function solution(n){
    let answer = changeBinary(n);
    return answer;
}

let m = 11; //result: 1011
console.log(solution(m))