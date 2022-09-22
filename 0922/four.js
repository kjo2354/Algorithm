function solution(n, m) {
    let maxCommon = 1;

    let max = n < m ? m : n;
    for(let i=2; i<max; i++) {
        if((n%i == 0) && (m%i == 0)) {
            maxCommon = Math.max(maxCommon, i);
        };
    }
    let minCommon = maxCommon * parseInt(n/maxCommon) * parseInt(m/maxCommon)
    return [maxCommon, minCommon];
}
console.log(solution(3, 12));//result: [3, 12]
/**
 * 최대공약수와 최소공배수
 * 재귀로 공약수 찾을 수 있다..
 * function gcdlcm(a, b) {
    var gcd = function(b, a) {
      var r = (b % a);
      return (r) ? gcd(a, r) : a;
    }
    return [gcd(b, a), ((b * a) / gcd(b, a))];
}
 * */