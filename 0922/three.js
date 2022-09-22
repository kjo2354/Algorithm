function solution(price, money, count) {
    let need = Array.from({length: count}, (v, i)=>price * (i+1)).reduce((acc, cur)=>acc + cur, 0)
    return money >= need ? 0 : (need - money);
}

console.log(solution(3, 20, 4));//result: 10
/**
 * 부족한 금액 계산하기
 * */