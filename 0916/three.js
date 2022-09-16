function solution(absolutes, signs) {
    var answer = absolutes.reduce((cur, next, i)=>{
        return cur + (next * (signs[i] ? 1 : -1));
    }, 0);
    
    return answer;
}

//result : 9
console.log(solution([4,7,12], [true,false,true]))

/**
 * 
 * 음양 더하기 
 * 
 * function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
   }

   누계하는 문제들은 reduce를 이용하는게 보기 좋다.. 친해야져한다.
   reduce 인자로는 1.누산기 (acc) 2.현재 값 (cur) 3.현재 인덱스 (idx) 4.원본 배열 (src)가 주어진다! 
 * /