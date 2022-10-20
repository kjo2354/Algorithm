function solution(word) {
    let list = ['A', 'E', 'I', 'O', 'U'];
    let num = [781, 156, 31, 6, 1];

    var answer = word.split('').reduce((acc, cur, idx) => {
        return acc + (num[idx] * list.indexOf(cur) + 1);
    }, 0)

    return answer;
}

let word = 'I';
//result : 6
console.log(solution(word))
