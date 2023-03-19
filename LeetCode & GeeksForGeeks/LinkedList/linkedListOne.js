/**
 *    author:  Abhishek Chauhan
 *    created: Sun Mar 19 09:23:21 PM IST 2023
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

    //addFirst........................................
    addFirst(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    // addLast...........................................
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

    //Remove First ............................................
    removeFirst() {
        if (this.head == null) {
            process.stdout.write("Empty List, nothing to delete");
            return;
        }
        this.head = this.head.next;
    }

    //Remove Last..............................................
    removeLast() {
        if (this.head == null) {
            process.stdout.write("Empty List, nothing to delete");
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

    //print the list........................................
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
l1.removeFirst();
l1.removeLast();
l1.print();
