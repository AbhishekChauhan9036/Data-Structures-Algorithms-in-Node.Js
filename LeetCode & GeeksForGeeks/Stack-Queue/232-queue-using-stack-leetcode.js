
var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.stack2.length === 0) {
        if (this.stack1.length === 0) {
            return
        }
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.stack2.length === 0) {
        return this.stack1[0];
    } else {
        return this.stack2.at(-1);
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0;
};