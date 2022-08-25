function solution(str1, word){
    let answer = [];
    
    let p = 1000;
    for(let w of str1) {
        if(w === word) {
            p = 0;
            answer.push(p);
        } else {
            p++;
            answer.push(p);
        }
    }

    p = 1000;
    for(let i=str1.length-1; i>= 0; i--){
        if(str1[i] === word) {
            p = 0;
            answer[i] = p;
        }
        else {
            p++;
            answer[i] = Math.min(answer[i], p)
        }
    }
    return answer;
}

let m = 'teachermode'; //result: 10121012210
console.log(solution(m, 'e'))