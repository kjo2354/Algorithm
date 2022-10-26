function solution(X, Y) {
    var answer = '';
    let xList = X.split('');
    let yList = Y.split('');
    for (let i = 0; i < 10; i++) {
        let cntX = xList.filter((item) => item == i).length;
        let cntY = yList.filter((item) => item == i).length;
        let cnt = Math.min(cntX, cntY);
        answer += i.toString().repeat(cnt);
    }
    if (answer === '') return "-1";
    else if (answer.match(/[^0]/g) === null) return "0";
    else {
        return [...answer].sort().reverse().join('')
    }
}
/**
 * 
 * X	Y	result
"100"	"2345"	"-1"
"100"	"203045"	"0"
"100"	"123450"	"10"
"12321"	"42531"	"321"
"5525"	"1255"	"552"
 * 
 */
let numbers = [3, 30, 34, 5, 9]
console.log(solution(numbers))

/**
 * 가장 큰 수
 * 두개를 합쳤을때를 비교하면 되는구나...
 **/