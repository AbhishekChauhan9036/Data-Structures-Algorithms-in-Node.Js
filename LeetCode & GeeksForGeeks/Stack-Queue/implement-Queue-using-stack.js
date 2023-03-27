// Time Complexity: Push operation : O(1)    Pop operation : O(N)
// Auxiliary Space: O(N)
class Queue {
    constructor() {
        this.arr = [];
        this.brr = [];
    }
    enQueue(val) {
        this.arr.push(val);
    }

    deQueue() {
        if (this.arr.length == 0 && this.brr.length == 0) {
            console.log("Queue is empty");
            exit(0);
        }

        if (this.brr.length == 0) {
            while (this.arr.length != 0) {
                this.brr.push(this.arr[0]);
                this.arr.shift();
            }
        }
        let val = this.brr[0];
        this.brr.shift();
        return val;
    }
}

let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());