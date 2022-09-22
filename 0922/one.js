function solution(arr1, arr2) {
    var answer = Array.from(Array(arr1.length), () => new Array(arr1[0].length))
    
    for(let i=0; i<arr1.length; i++) {
        for(let j=0; j<arr1[i].length; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return answer;
}

let arr1 = [[1,2],[2,3]];
let arr2 = [[3,4],[5,6]];
//result [[4,6],[7,9]]
console.log(solution(arr1, arr2))

/**
 * 행렬의 덧셈
 * 2차원 배열 초기화 작업
 * Array.from(Array(arr1.length), () => new Array(arr1[0].length)) : 빈값(empty)으로 생성
 * const arr2 = Array.from(Array(5), () => Array(2).fill(null)) : 특정 값으로 채워서 생성
 * */