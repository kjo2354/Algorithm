function solution(s) {
    let list = [];

    for (let x of s) {
        if (list.length == 0) list.push(x);
        else {
            let chk = list[list.length - 1];
            if (chk == x) {
                list.pop();
            } else {
                list.push(x);
            }
        }
    }
    return list.length == 0 ? 1 : 0;
}
let s = 'baabaa';
//result : 1

console.log(solution(s))

/**
 * 짝지어 제거하기
 * 문자를 하나씩 추가된다고 생각하고 이전에 문자가 같은 경우만 제거
 * */