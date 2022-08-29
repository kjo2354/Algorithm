function solution(m1, m2){
    let answer = 'YES';

    const map1 = new Map();
    for(let x of m1.split('')) {
        let v = map1.get(x);
        map1.set(x, v?++v:1);
    }

    const map2 = new Map();
    for(let x of m2.split('')) {
        let v = map2.get(x);
        map2.set(x, v?++v:1);
    }

    for(let [k, v] of map1) {
        if(!map2.has(k) || (map2.has(k) && v !== map2.get(k))) {
            answer = 'NO'; 
            break;
        }
    }
    return answer;
}

let m1 = 'abaCC'; 
let m2 = 'Caaab';
//result: YES
console.log(solution(m1, m2))