function solution(s) {
    var answer = [];
    let num = s.match(/[^{}]*\d/g).map((item) => item.split(',')).sort((a, b) => a.length - b.length);

    if (num.length == 1) return [parseInt(num[0])];

    for (let x of num) {
        x.map((item) => {
            item = parseInt(item);
            if (!answer.includes(item)) answer.push(item);
        })

    }
    return answer;
}

let s = "{{1,2,3},{2,1},{1,2,4,3},{2}}"
//result : 	[2, 1, 3, 4]

console.log(solution(s))

/**
 * 튜플
 *
 * match(/[^{}]*\d/g)
 * [^제외하고 싶은 문자]를 이용해서 {}를 다 없애주고 숫자들만 구하고 진행!
*/