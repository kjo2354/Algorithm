function solution(my_string) {
    var answer = new Set(my_string);
    return [...answer].join('');
}
let name = "people" //result : peol
console.log(solution(name))
//조이스틱