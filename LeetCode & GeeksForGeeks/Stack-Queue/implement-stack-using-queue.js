// Time Complexity: Push operation : O(1)    Pop operation : O(1)
// Auxiliary Space: O(N)


class Stack {
    constructor() {
        this.dequeue = [];
    }

    push(item) {
        this.dequeue.push(item);
    }

    pop() {
        return this.dequeue.pop();
    }

    size() {
        return this.dequeue.length;
    }

    isEmpty() {
        return this.dequeue.length == 0;
    }

    top() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.dequeue[this.dequeue.length - 1];
        }
    }
}

let st = new Stack();
st.push(1);
st.push(2);
st.push(3);

console.log("current size: " + st.size());
console.log(st.top());
st.pop();
console.log(st.top());
st.pop();
console.log(st.top());
console.log("current size: " + st.size());
