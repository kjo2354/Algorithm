function solution(str){
    let answer = '';
    
    let count = 1;
    str = str + ' ';
    for(let i=1; i<str.length - 1; i++){
        if(str[i] === str[i+1]) count++;
        else {
            answer += str[i];
            if(count > 1) answer += count;
            count = 1;
        }
    }
    return answer;
}

let m = 'KKHSSSSSSSE'; //result: K2HS7E
console.log(solution(m))