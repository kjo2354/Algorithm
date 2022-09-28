const NAME = { 1: 'FRI', 2: 'SAT', 3: 'SUN', 4: 'MON', 5: 'TUE', 6: 'WED', 0: 'THU' }
function solution(a, b) {
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDay = days.filter((item, i) => i < a - 1).reduce((acc, cur) => acc + cur, 0) + b;

    var answer = NAME[totalDay % 7];
    return answer;
}

//result : "TUE"
console.log(solution(5, 24))

/**
 * 2016년
 * 날짜 계산하는 문제!
 * 매달 일수를 더해서 총 일수에서 7로 나눴을때 나머지로 계산되도록 하였다.
 *
 * 다른 풀이에서는 date 객체를 이용하였다.
 * 아래와 같이 new Date를 이용해서 해당 날짜의 정보를 가져왔고 여기에서 요일을 구할 수 있다. (참고)
 * function getDayName(a,b){
  var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}
 *
 * */