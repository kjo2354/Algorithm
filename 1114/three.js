function gcdlcm(a, b) {
    var gcd = function (b, a) {
        var r = (b % a);
        return (r) ? gcd(a, r) : a;
    }
    return [gcd(b, a), ((b * a) / gcd(b, a))];
}
function solution(denum1, num1, denum2, num2) {
    let denum = (denum1 * num2) + (denum2 * num1);
    let num = num1 * num2;
    const [g, l] = gcdlcm(denum, num);

    return [(denum / g), (num / g)];
}

let denum1 = 1,
    num1 = 2,
    denum2 = 3,
    num2 = 4;
console.log(solution(denum1, num1, denum2, num2))