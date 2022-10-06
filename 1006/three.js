function solution(s) {
    var answer = s.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
    return answer;
}

let s = "3people    unFollowed me";
//result : 3people Unfollowed Me
console.log(solution(s))

/**
 * JadenCase 문자열 만들기
 * 정규식!!
 * ^ : 문자열의 시작
 * \s : 스페이스, 탭, 줄 바꿈 등을 포함한 하나의 공백 문자
 * \S : 공백이 아닌 하나의 문자
 *
 *function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}
 * */