function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    d.sort((a, b) => a - b);
    for (let i = 0; i < d.length; i++) {
        sum += d[i];
        if (sum > budget) break;
        answer++;
    }
    return answer;
}

let arr1 = [2, 2, 3, 3]
//result : 3
console.log(solution(arr1, 10))

/**
 * 예산
 *
 * dfs로 풀면 시간초과가 나오는 문제였고 정렬 후 합계 계산..
 * 가장 많이 선택할 수 있는 방법을 찾는 문제!
 * */