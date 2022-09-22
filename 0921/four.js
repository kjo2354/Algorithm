function changeBit(n) {
    let result = [];
    while(n/2 != 0) {
        result.push(n%2);
        n = parseInt(n/2);
    }
    return result.reverse().join('')
}
function solution(n, arr1, arr2) {
    var answer = [];
    let c_arr1 = arr1.map((x)=> changeBit(x));
    let c_arr2 = arr2.map((x)=> changeBit(x));
    
    let maxlen = Math.max(...c_arr1, ...c_arr2).toString().length;
    c_arr1 = c_arr1.map((item)=> item.padStart(maxlen, 0));
    c_arr2 = c_arr2.map((item)=> item.padStart(maxlen, 0));

    for(let i=0; i<n; i++) {
        let st = '';
        for(let j=0; j<maxlen; j++) {
            st += (c_arr1[i][j] == 1 || c_arr2[i][j] == 1) ? '#' : ' ';
        }
        answer.push(st);
    }
    return answer;
}
let n = 5;
let arr1 = [9, 20, 28, 18, 11]; 
let arr2 = [30, 1, 21, 17, 28]; 
//result : ["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(n, arr1, arr2))

/**
 * 비밀지도
 * 
 * toString(2) 함수하나로 이진법 변환이 가능하다..
 * replace, 정규식을 이용한 문제 변환..
 * 
 * function solution(n, arr1, arr2) {
    let answer = [];
    for (let i = 0; i < n; i += 1) {
        const result = arr1[i] | arr2[i]; // 합집합
        const bit = result.toString(2); // 이진수 문자열로 변환
        const blankString = ' '.repeat(n - bit.length); // 부족한 만큼 빈 문자열을 채운다
        const bitString = bit.replace(/1/gi, '#').replace(/0/gi, ' ') // 1을 #으로 0을 공백으로 바꾼다
        answer.push(blankString + bitString); // 빈 문자열과 비트 문자열을 합친다.
    }

    return answer; // 반환
}
 * */