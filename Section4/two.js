function chkPrimeNum(num){
    if(num === 1) return false;

    let result = true;
    for(let i=2; i<num; i++) {
        if(num%i === 0) {
            result = false;
            break;
        }
    }

    return result;
}
function solution(n, m){
    let answer = [];

    for(let item of m) {
        let rev = Number(item.toString().split('').reverse().join(''));
        if(chkPrimeNum(rev)) answer.push(rev);
    }
    
    return answer;
}

let m = [32, 55, 62, 20, 250, 370, 200, 30, 100]; //result: 23 2 73 2 3
console.log(solution(9, m))