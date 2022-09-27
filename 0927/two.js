function solution(sizes) {
    var answer = 0;
    let width = 0, height = 0;

    for (let i = 0; i < sizes.length; i++) {
        let [x, y] = sizes[i];
        if (x < y) {
            sizes[i][0] = y;
            sizes[i][1] = x;
        }
        width = Math.max(sizes[i][0], width)
        height = Math.max(sizes[i][1], height)
    }

    answer = width * height;
    return answer;
}

let arr = [[60, 50], [30, 70], [60, 30], [80, 40]]
//result : 4000
console.log(solution(arr))

/**
 * 최소직사각형
 * 사이즈 체크 정렬 후 곱셈하는 간단한 내용
 * */