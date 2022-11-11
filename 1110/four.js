function solution(numbers) {
    var answer = 0;
    let num = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    }
    for (const [k, v] of Object.entries(num)) {
        let reg = new RegExp(`${k}`, 'g');
        numbers = numbers.replace(reg, v);
    }
    return numbers;
}
console.log(solution("onetwothreefourfivesixseveneightnine"))