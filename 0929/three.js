function solution(N, stages) {
    var answer = [];
    let fail = [];
    let total = stages.length;

    for (let i = 1; i <= N; i++) {
        let count = stages.filter((stage) => stage == i).length;
        let percent = count == 0 ? 0 : count / total;
        fail.push({ index: i, value: percent });
        total -= count;
    }
    fail.sort((a, b) => b.value - a.value);
    answer = fail.map((item) => item.index)
    return answer;
}

let m = [2, 1, 2, 6, 2, 4, 3, 3]; //result : [3,4,2,1,5]
let m1 = [4, 4, 4, 4, 4]; //result : [4,1,2,3]
console.log(solution(4, m1))

/**
 * 실패율
 *
 * 배열로 0에 index, 1에 value를 저장하는게 더 괜찮아 보이네 ..
 * function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}
 * */