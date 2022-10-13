function check(s) {
    let list = [];
    for (let x of s) {
        if (x == '(' || x == '{' || x == '[') {
            list.push(x);
        } else {
            let lastValue = list[list.length - 1];
            if (lastValue == undefined) return false;
            switch (x) {
                case ')':
                    lastValue == '(' && list.pop();
                    break;
                case '}':
                    lastValue == '{' && list.pop();
                    break;
                case ']':
                    lastValue == '[' && list.pop();
                    break;
            }
        }
    }
    return list.length == 0;
}
function solution(s) {
    var answer = check(s) ? 1 : 0;
    let list = s.split('');
    for (let i = 1; i < list.length; i++) {
        let x = list.shift();
        list.push(x);
        s = list.join('');
        check(s) && answer++;
    }
    return answer;
}

let s = "}}}"
//result : 3
console.log(solution(s))

/**
 * 괄호 회전하기
 *
*/