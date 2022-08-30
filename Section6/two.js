function* calc(a, b, operator) {
    switch(operator) {
        case '+': yield a + b;
        case '-': yield a - b;
        case '*': yield a * b;
        case '/': yield a / b;
    }
}
function solution(m){
    let answer = 0;
    let list = m.toString().split('');
    let num_list = [];

    for(let x of list) {
        let cur = Number(x);
        if(!isNaN(cur)) {
            num_list.push(cur);
        } else {
            let b = num_list.pop();
            let a = num_list.pop();
            let c = calc(a, b, x);

            num_list.push(c.next().value)
        }
    }

    answer = num_list[0];
    return answer;
}

let m = '352+*9-'; //result: 12
console.log(solution(m))