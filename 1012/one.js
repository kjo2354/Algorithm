function solution(cacheSize, cities) {
    var answer = 0;
    let hash = new Set();

    for (let city of cities) {
        city = city.toLowerCase()
        if (hash.has(city)) {
            answer++;
            hash.delete(city);
        } else {
            answer += 5;
            if (hash.size == cacheSize) {
                hash.delete([...hash][0]);
            }
        }
        cacheSize != 0 && hash.add(city)
    }
    return answer;
}

let cacheSize = 2;
let cities = ["Jeju", "Pangyo", "NewYork", "newyork"];
//result : 50
console.log(solution(cacheSize, cities))

/**
 * [1차] 캐시
 * LRU(Least Recently Used)캐시를 이용해야된다..
 * 캐시에 있는지 없는지 상관없이 제일 뒤로 옮겨줘야한다.
 *
 * hash에서 add, has, delete를 사용
*/