function solution(strings, n) {
    var answer = strings.sort((a, b) => {
        if (a[n] < b[n]) return -1;
        else if (a[n] > b[n]) return 1;
        else {
            if (b > a) return -1;
            else return 1;
        }
    });
    return answer;
}

let arr = [1, 2, 3];
//result : ["abcd", "abce", "cdx"]
console.log(solution(arr, 2))

/**
 * 문자열 내 마음대로 정렬하기
 * sort함수에 대해서 공부했고 [1, 2, 3]일때 a, b에는
 * a: 2 / b: 1로 들어오게 되며 return 1은 뒤로 / return -1 앞으로
 *
 * localeCompare : 문자열과 문자열을 비교해주는 내부 함수
 * alert('a'.localeCompare('b')); // -1
 * alert('b'.localeCompare('a')); // 1
 * alert('b'.localeCompare('b')); // 0
 * 위에와 같은 결과 발생한다.
 *
 * function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
  }
 * */