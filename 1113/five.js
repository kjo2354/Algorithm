function solution(common) {
    let diff = common[1] - common[0];
    let div = common[1] / common[0];
    let lastIndex = common.length - 1;
    if (common.length == 2) return common[1] + diff;
    if (common[1] + diff === common[2]) return common[lastIndex] + diff;
    return common[lastIndex] * div;
}
console.log(solution([2, 4, 8]));