function solution(n, pList=[]){
    let answer = [];
    pList.reduce((pre, cur)=>{
        if(pre < cur) {
            answer.push(cur)
        }

        return cur;
    }, 0);
    return answer;
}

let m = [7, 3, 9, 5, 6, 12]; //result: 7 9 6 12
console.log(solution(6, m))