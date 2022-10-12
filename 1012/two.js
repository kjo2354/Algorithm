function solution(arr1, arr2) {
    var answer = Array.from(Array(arr1.length), () => new Array(arr2[0].length))

    for (let i = 0; i < arr1.length; i++) {
        let x = arr1[i];
        for (let j = 0; j < arr2[0].length; j++) {
            let y = arr2.map((item) => item[j]);
            let sum = x.reduce((acc, cur, idx) => acc + (cur * y[idx]), 0);
            answer[i][j] = sum;
        }
    }
    return answer;
}
let arr1 = [[1, 2, 3, 4], [1, 2, 3, 4]]
let arr2 = [[1, 2], [1, 2], [1, 2], [1, 2]]
//result : [[15, 15], [15, 15], [15, 15]]
console.log(solution(arr1, arr2))
/**
 * 행렬의 곱셈
 *
 * map, reduce를 잘 사용한 예시인데
 * arr1에서 가져올꺼는 row값!
 * arr2에서는 높이가 아닌 한 줄에 가지고 있는 요소 갯수가 중요하다.
 * 곱셈의 완성 후 리턴은 세로는 arr1의 legnth / 가로는 arr2 한줄의 갯수
 *
 * 그리고 이차원 배열을 만드는건 잊으면 안된다.
 * Array.from(Array(3), ()=> new Array(4));
 * function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)))
}
 *
*/

