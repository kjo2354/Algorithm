function solution(my_string) {
    var answer = my_string.match(/\d+/g).reduce((acc, cur) => acc + parseInt(cur), 0);
    return answer;
    new RegExp
}
//result : 37
console.log(solution("zzz11a1"))
//체육복