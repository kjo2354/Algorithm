function solution(citations) {
    var answer = 0;
    let h_index = 0;

    citations.sort((a, b) => b - a);
    for (let i = 0; i < citations.length; i++) {
        let value = citations[i];
        if (value < citations.length && citations[value] >= value) {
            h_index = value;
            break;
        }
    }

    answer = citations.filter((item) => item > h_index).length;
    return answer;
}

let citations = [1, 1, 5, 7, 6];
//result : 3
console.log(solution(citations))

/**
 * H-Index
 * h - 인덱스 ( f ) = f(i) >= i라는 공식을 알아야 하는 문제
 * 내 풀이는 잘못되었다. f(idx) >= idx를 찾는 문제임!
 * citations.filter((item, idx)=> item > idx).length;
 * 하면 되는 문제였음
 *
*/