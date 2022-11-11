function solution(s) {
    var answer = 0;
    let list = s.split(' ');
    list.map((v, i) => {
        if (v === 'Z') {
            if (i > 0) {
                let idx = i;
                let count = 0;
                while (list[--idx] == 'Z') { count++ };
                answer -= parseInt(list[idx - count]);
            }
        } else {
            answer += parseInt(v);
        }
    })
    return answer;
}
console.log(solution("1 2 3 Z Z"))