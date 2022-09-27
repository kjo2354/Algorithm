function solution(n, arr1, arr2) {
    var answer = [];

    arr1 = arr1.map((item) => item.toString(2).padStart(n, '0'));
    arr2 = arr2.map((item) => item.toString(2).padStart(n, '0'));

    answer = arr1.map((row, i) => row.split('').map((v, j) => v == 1 || arr2[i][j] == 1 ? '#' : ' ').join(''));
    return answer
}

let arr1 = [46, 33, 33, 22, 31, 50]
let arr2 = [27, 56, 19, 14, 14, 10]
//result : ["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(5, arr1, arr2))

/**
 * [1차] 비밀지도
 * toString(2) : 이진법으로 변환
 * padStart 사용 = '0'.repeat(n - s.length)로도 많이 사용됨..
 * 다른 풀이에서는 정규식을 많이 이용한다!
 * replac(/0/g,' ').replace(/1/g, '#') 이런식으로.. 참고
 * */