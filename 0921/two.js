function solution(s) {
    var answer = true;
    let s_len = s.length;

    if(s_len != 4 && s_len != 6) return false;
    for(let x of s) {
        if(isNaN(x)) {
            answer = false;
            break;
        }
    }
    return answer;
}
let m = 'a234'; //result : false
console.log(solution(m))

/**
 * 문자열 다루기 기본
 * 
 * 정규식을 이용하는것도 방법.! 
 * function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
 * */