function solution(msg) {
    var answer = [];
    let words = {};
    let alph = 65;
    for (let i = 1; i <= 26; i++) {
        let key = String.fromCharCode(alph);
        words[key] = i;
        alph++;
    }

    let w = '', wi = 0;
    for (let dy = 0; dy <= msg.length; dy++) {
        if (msg[dy] == undefined) {
            answer.push(wi);
        } else {
            w += msg[dy];
            if (!words[w]) {
                words[w] = Object.keys(words).length + 1;
                answer.push(wi);
                w = '', wi = 0;
                dy--;
                continue;
            } else {
                wi = words[w]
            }
        }
    }
    return answer;
}

let msg = 'KAKAO';
//result : [11, 1, 27, 15]
console.log(solution(msg))

/**
 * [3차] 압축
 *
 * String.fromCharCode, charCodeAt함수 기억!
*/