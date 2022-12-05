function solution(order) {
    let list = Array.from({ length: order.length }, (v, i) => i + 1);
    let sub = [];
    let index = 0;

    list.reverse();
    while (list.length || sub.length) {
        if (list.length > 0) {
            let v = list.pop();
            if (v === order[index]) {
                index += 1;
            } else {
                sub.push(v);
            }
        }

        if (sub.length > 0) {
            if (sub[sub.length - 1] === order[index]) {
                sub.pop();
                index += 1;
            } else if (list.length === 0) {
                break;
            }
        }
    }
    return index;
}
//result : 2
console.log(solution([4, 3, 1, 2, 5]))