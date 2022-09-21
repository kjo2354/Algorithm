function solution(s) {
    var answer = s.split('').sort((a,b)=>b.charCodeAt()-a.charCodeAt()).join('');
    
    return answer;
}
let m = 'Zbcdefg'; //result : gfedcbZ
console.log(solution(m))

/**
 * 문자열 내림차순으로 배치하기
 * 굳이 charCodeAt으로 변환하여 비교할 필요 없었음.. reverse 있다!
 * function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}
 * */