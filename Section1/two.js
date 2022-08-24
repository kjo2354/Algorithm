function solution(pList = []){
    pList.sort((a, b) => a-b);
    
    let answer = pList[0] + pList[1] >= pList[2] ? 'YES' : 'NO';
    return answer;
}

let m1 = [6, 7, 11]; // result: YES
let m2 = [13, 33, 17]; // result: NO

console.log(solution(m2))