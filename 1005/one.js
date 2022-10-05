function solution(new_id) {
    let first_len = new_id.length;
    let answer = new_id.replace(/[A-Z]/g, (word) => word.toLowerCase())
        .replace(/[^a-z0-9-_.]/g, '')
        .replace(/[.]+/g, '.')
        .replace(/^[.]/, '').replace(/[.]$/, '');

    if (answer.length == 0) answer = 'a';

    answer = answer.slice(0, 15).replace(/[.]$/, '');
    if (answer.length <= 2) answer = answer.padEnd(3, answer[answer.length - 1]);
    return answer;
}

let m = '...!@BaT#*..y.abcdefghijklm'; //result : bat.y.abcdefghi
console.log(solution(m))

/**
 * 신규 아이디 추천
 *
 * 중간에 padEnd(1, 'a')를 이용하면 굳이 길이 체크 없이 빈문자열일때를 체크할 수 있다!!
 * ^ : 첫문자 / $ : 마지막 문자
 * toLowerCase() : 문자 전체에 적용됨
 * [^문자] : 해당 문자 제외라는 의미 / \w(문자), \d(숫자)
 *
 * const solution = (new_id) => {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '')
    return id.padEnd(3, id[id.length-1])
}
 *
 * */