/**
 *    author:  Abhishek Chauhan
 *    created: Tue Mar 21 01:57:00 PM IST 2023
 **/
class Node {
    constructor(val, next) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    //add element at First position....................................
    addFirst(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    //add element at given Position....................................
    addAtPosition(index, val) {
        if (index == 0) {
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
        } else {
            const newNode = new Node(val);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            newNode.next = prev.next;
            prev.next = newNode;
        }
    }

    // add element at Last Position..........................................
    addLast(val) {
        let newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        let lastNode = this.head;
        while (lastNode.next != null) {
            lastNode = lastNode.next;
        }
        lastNode.next = newNode;
    }

    //Remove element at  First Position......................................
    removeFirst() {
        if (this.head == null) {
            process.stdout.write(`Empty List, nothing to delete`);
            return;
        }
        this.head = this.head.next;
    }

    //Remove element at given Position.....................................
    removeAtPosition(index) {
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        return removedNode.value;
    }

    //Remove elemnt at Last Position......................................
    removeLast() {
        if (this.head == null) {
            process.stdout.write(`Empty List, nothing to delete`);
            return;
        }
        if (this.head.next == null) {
            this.head = null;
            return;
        }
        let currNode = this.head;
        let lastNode = this.head.next;
        while (lastNode.next != null) {
            currNode = currNode.next;
            lastNode = lastNode.next;
        }
        currNode.next = null;
    }

    //print the entire list........................................
    print() {
        let currNode = this.head;
        while (currNode != null) {
            process.stdout.write(`${currNode.val} -> `);
            currNode = currNode.next;
        }
        process.stdout.write(`null`);
    }
}

const l1 = new LinkedList();
l1.addLast(30);
l1.addFirst(10);
l1.addFirst(20);
l1.addAtPosition(0, 50);
// l1.removeAtPosition(2);
// l1.removeFirst();
// l1.removeLast();
l1.print();
