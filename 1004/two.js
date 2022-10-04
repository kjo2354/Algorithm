function solution(lottos, win_nums) {
    const rank = {
        2: 5,
        3: 4,
        4: 3,
        5: 2,
        6: 1
    }
    var answer = [];
    let correct_count = 0, erase_count = 0;

    erase_count = lottos.filter((lotto) => lotto == 0).length;
    correct_count = lottos.filter((lotto) => win_nums.indexOf(lotto) > -1).length;

    let max = rank[correct_count + erase_count] || 6;
    let min = rank[correct_count] || 6;

    answer = [max, min];
    return answer;
}

let lottos = [45, 4, 35, 20, 3, 9];
let win_nums = [20, 9, 3, 45, 4, 35];
//result : [3, 5]
console.log(solution(lottos, win_nums))

/**
 * 로또의 최고 순위와 최저 순위
 *
 * rank를 배열로 만들어서 맞춘 갯수를 index로 처리..
 * minCount, maxCount를 filter 줬을때 부터 0을 처리하면서 카운트!..
 *
 * function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}
 * */