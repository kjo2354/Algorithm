function solution(s, n) {
    var answer = '';
    for (let x of s) {
        if (x == ' ') answer += ' ';
        else {
            let char = x.charCodeAt(0);
            for (let i = 0; i < n; i++) {
                if (char === 90) {
                    char = 65;
                } else if (char === 122) {
                    char = 97;
                } else {
                    char++;
                }
            }
            answer += String.fromCharCode(char);
        }
    }
    return answer;
}

let arr1 = "a B z"
//result : e F d
console.log(solution(arr1, 4))

/**
 * 시저 암호
 * 아스키 코드로 변환해서만 하려고 한게 문제!..
 * 아래 코드와 같이 알파벳안에서만 따지면 되는 건데..
 * 대소문자 구분된 문자열을 선언하여 index로 문제를 접근할 수 있다...
 * 만약에 z 보다 높은 index를 가지면 처음으로 돌아가서 넘어간 만큼 이동해주면 된다...;;
 *
 * 그래도 내가 접근한 방식에서도 얻은 점은 문자.charCodeAt(0)를 통해서 아스키 코드 값을 받고
 * String.fromCharCode(코드) 함수로 해당 문자로 변환할 수 있다는 점이다.
 * charCodeAt, String.fromCharCode
 *
 * function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' ';
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}
 * */