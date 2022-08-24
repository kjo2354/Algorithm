function solution(n, pList=[]){
    let answer = 0;

    let pre = pList[0];
    for(let i=1; i<n; i++) {
        let cur = pList[i];
        if(pre < cur) answer++;

        pre = cur;
    }
    return answer;
}

let m = [130,135,148,140,145,150,150,153]; //result: 5
console.log(solution(8, m))