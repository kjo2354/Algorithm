class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }
    peek() {
        return this.queue[this.front];
    }
    size() {
        return this.rear - this.front;
    }
}
function solution(s) {
    let stack = [];
    for (let x of s) {
        if (x === "(") stack.push(x);
        else if (stack.length == 0) {
            return false;
        } else {
            stack.pop();
        }
    }
    return stack.length === 0;
}

console.log(solution("()()"))