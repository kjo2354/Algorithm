function solution(n, aL=[], bL=[]){
    let answer = [];

    for(let i=0; i<n; i++) {
        let a = aL[i], b = bL[i];
        if(a === b) {
            answer.push('D')
        } else if(
            (a === 1 && b === 3) || 
            (a === 2 && b === 1) || 
            (a === 3 && b === 2) 
        ) {
            answer.push('A')
        } else {
            answer.push('B')
        }
    }
    return answer;
}

//result: A B A B D
console.log(solution(5, [2,3,3,1,3], [1,1,2,2,3]))