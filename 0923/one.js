function solution(arr)
{
    var answer = [];
    let cur = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(cur != arr[i]) {
            answer.push(cur);
            cur = arr[i];
        }
    }
    answer.push(cur);
    return answer;
}

let arr1 = [1,1,3,3,0,1,1];
//result [1,3,0,1]
console.log(solution(arr1))

/**
 * 같은 숫자는 싫어
 * 
 * filter 함수를 사용해서 풀수있음..
 * 마지막은 undefined와 비교되면서 들어갈 수 있음..
 * function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
 * */