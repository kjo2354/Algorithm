//큰 수 만들기
// n이 백만이면 O(n), O(n log n)으로 풀어야한다.
// 큰 값이 나오면 이전 값 중 더 작은 값은 전부다 삭제
// 즉, 스택의 바당에서부터 탑은 큰 수 부터 작은 수로 나열이 되어야한다.
function solution(number, k) {
    const stack = [];
    let count = 0;

    for (const item of number) {
        while (count < k && stack[stack.length - 1] < item) {
            stack.pop();
            count += 1;
        }
        stack.push(item);
    }

    while (count < k) {
        stack.pop();
        count += 1;
    }
    return stack.join("")
}
//result : 3
console.log(solution("1924", 2))