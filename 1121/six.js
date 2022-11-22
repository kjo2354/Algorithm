function solution(food) {
    let left = '';
    for (let i = 1; i < food.length; i++) {
        left += i.toString().repeat(parseInt(food[i] / 2));
    }
    let right = [...left].reverse().join('');
    var answer = left + '0' + right;
    return answer;
}
//result : "1223330333221"
console.log(solution([1, 3, 4, 6]))