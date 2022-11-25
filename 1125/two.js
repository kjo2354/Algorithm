function solution(ingredient) {
    var answer = 0;
    let m = [];
    for (let i = 0; i < ingredient.length; i++) {
        m.push(ingredient[i]);
        let len = m.length;
        if (len >= 4 && (
            m[len - 1] == 1 &&
            m[len - 2] == 3 &&
            m[len - 3] == 2 &&
            m[len - 4] == 1
        )) {
            answer += 1;
            for (let j = 0; j < 4; j++) {
                m.pop();
            }
        }
    }
    return answer;
}
//result : 2
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))