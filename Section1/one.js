function solution(pList = []){
    let answer = Number.MAX_SAFE_INTEGER;
    for(let item of pList) {
        answer = answer >= item ? item : answer;
    }

    return answer;
}

let m = [6, 5, 11];
console.log(solution(m))