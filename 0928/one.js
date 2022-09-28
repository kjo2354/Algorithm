function solution(s) {
    const obj = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    }

    for (let [key, value] of Object.entries(obj)) {
        const regex = new RegExp(`${key}`, 'g')
        s = s.replace(regex, value)
    }
    return s;
}

let m = "one4seveneight"
//result : 1478
console.log(solution(m))

/**
 * 숫자 문자열과 영단어
 *
 * 반복문안에 동적 정규식 할당 하는 방법!
 * const regex = new RegExp(`${key}`, 'g')
 * 인스턴스로 만들어서 할당 해줘야한다.
 *
 * */