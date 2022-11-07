function solution(sizes) {
    let maxW = 0, maxH = 0;

    for (const [w, h] of sizes) {
        let width = w >= h ? w : h;
        let height = w >= h ? h : w;
        maxW = Math.max(maxW, width);
        maxH = Math.max(maxH, height);
    }
    return maxW * maxH;
}
let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
//result : 4000
console.log(solution(sizes));