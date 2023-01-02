//Stack 구현
class Node { 
    constructor(value) {
        this.item = value;
        this.prev = null;
    }
}
var MyStack = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    const node = new Node(x);
    if(!this.size) this.head = node;
    else {
        node.prev = this.head;
        this.head = node;
    }
    this.size += 1;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(!this.size) return null;

    const pop = this.head;
    this.head = this.head.prev;
    this.size -= 1;
    return pop.item;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.head.item;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.size == 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */