function solution(dartResult) {
    let points = Array(3);
    let index = 0;

    for (let x of dartResult) {
        if (!isNaN(x)) {
            if (x == '0' && points[index - 1] == '1') {
                points[index - 1] = '10';
            } else {
                points[index] = x;
                index++;
            }
        } else {
            switch (x) {
                case 'S': //싱글
                    points[index - 1] *= 1;
                    break;
                case 'D': //더블
                    points[index - 1] = points[index - 1] * points[index - 1];
                    break;
                case 'T': //트리플
                    points[index - 1] = points[index - 1] * points[index - 1] * points[index - 1];
                    break;
                case '#'://아차상
                    points[index - 1] = points[index - 1] * (-1);
                    break;
                case '*'://스타상
                    points[index - 1] = points[index - 1] * 2;
                    if (index - 2 >= 0) points[index - 2] = points[index - 2] * 2;
                    break;
            }
        }
    }

    return points.reduce((acc, cur) => acc + cur, 0);
}

let m = '1D2S#10S'; //result : 37
console.log(solution(m))

/**
 * 다트 게임
 *
 * Math.pow 함수를 통해서 제곱을 할 수 있는점.
 * match함수 & 정규식으로 숫자기준으로 array를 만든 점.
 * 숫자, S/D/T, *, # 구분.
 *
 *function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}
 *
 * */