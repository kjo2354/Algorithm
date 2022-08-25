function solution(str1){
    let answer = 'YES';
    let maxLength = Math.ceil(str1.length/2);
    for(let i=0; i<maxLength; i++){
        let s = str1[i];
        let e = str1[str1.length - i - 1];

        if(s.toString().toUpperCase() != e.toString().toUpperCase()) {
            answer = 'NO';
            break;
        }
    }
    return answer;
}

let m = 'gooG'; //result: YES
console.log(solution(m))