function solution(arr) {
    if(arr.length == 1) return [-1];
    
    let min_index = 0;
    arr.map((v, i) => {
        if(v <= arr[min_index]) {
            min_index = i            
        }
    });
    
    arr.splice(min_index, 1);
    return arr;
}

let m = [4, 3, 2, 1];
console.log(solution(m))

/**
 * 배열 값 중 최솟값 제거 문제
 * function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1); //...arr 스프레드 연산자를 통해서 전체를 풀 생각을 못 함..
    if(arr.length<1)return[-1];
    return arr;
}
 * 스프레드 연산자를 사용하면 배열, 문자열, 객체 등 반복 가능한 객체 (Iterable Object)를 개별 요소로 분리할 수 있습니다
 *
 * 스프레드 연산자 사용 
 * 1.배열 병합
 *  let arr1 = [1,2,3];
 *  let arr2 = [4,5,6];
 *  let arr = [...arr1, ...arr2]; // [1,2,3,4,5,6];
 * 2.배열 복사 (얕은 복사)
 *  let arr = ['철수','영희'];
 *  let arr2 = [...arr1];
 *  arr2.push('바둑이');
 * 
 *  console.log(arr2); //['철수','영희', '바둑이]
 *  console.log(arr1); //['철수','영희']
 * /