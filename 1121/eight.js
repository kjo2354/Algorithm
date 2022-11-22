function solution(X, Y) {
    var answer = [];
    let x_list = [...X].sort((a, b) => a - b);
    let y_list = [...Y].sort((a, b) => a - b);
    let x_index = 0, y_index = 0;

    while (x_index < x_list.length && y_index < y_list.length) {
        let x = x_list[x_index];
        let y = y_list[y_index];

        if (x == y) {
            answer.push(x);
            x_index += 1;
            y_index += 1;
        } else if (x > y) {
            y_index += 1;
        } else {
            x_index += 1;
        }
    }

    if (answer.length === 0) return "-1";
    let result = answer.sort((a, b) => b - a).join('');
    if (parseInt(result) === 0) return "0";
    return result;
}
//result : "321"
console.log(solution("100", "203045"))