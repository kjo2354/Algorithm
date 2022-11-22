function solution(elements) {
    let array = [];
    let s = 0, e = elements.length;

    for (let i = 1; i <= elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            let cnt = 0, sum = 0;
            while (cnt < i) {
                sum += elements[s];
                s += 1;
                cnt += 1;
                if (s === e) s = 0;
            }
            array.push(sum);
        }
    }
    return [...new Set(array)].length;
}
//result : 18
console.log(solution([7, 9, 1, 1, 4]))