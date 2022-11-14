function solution(polynomial) {
    let arr = [0, 0];
    polynomial
        .split(' ')
        .map((v) => {
            if (v !== '+') {
                if (v.includes('x')) {
                    let num = parseInt(v.split('x')[0] || 1)
                    arr[0] += num;
                } else {
                    arr[1] += parseInt(v);
                }
            }
        })
    if (arr[0] === 0) {
        return `${arr[1]}`;
    } else if (arr[1] === 0) {
        return `${arr[0] === 1 ? '' : arr[0]}x`;
    } else {
        return `${arr[0] === 1 ? '' : arr[0]}x + ${arr[1]}`;
    }
}
//18
let m1 = "x"
console.log(solution(m1))