function solution(my_str, n) {
    var answer = [];
    while (my_str.length > 0) {
        answer.push(my_str.substring(0, n));
        my_str = my_str.substring(n);
    }
    return answer;
}
//result : "11000"
console.log(solution("abc1Addfggg4556b", 6))
//체육복