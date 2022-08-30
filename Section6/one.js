function solution(m){
    let answer = '';
    let chkList = [];

    let str_list = m.toString().split('');
    for(let x of str_list) {
        if(x === '(') chkList.push(x);
        else chkList.pop();
    }

    answer = chkList.length === 0 ? 'YES' : 'NO';
    return answer;
}

let m = '(()(()))(()'; //result: NO
console.log(solution(m))