//class
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        const node = new Node(value);    //null-> 2 ->1
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            // this.head.prev = node;
            this.head = node;
        }
    }

    append(value) {
        const node = new Node(value);
        let pointer = this.head;

        if (this.head == null) {
            node.prev = null;
            this.head = node;
            return;
        }
        while (pointer.next != null) {
            pointer = pointer.next;
        }
        pointer.next = node;
    }

    removeFromFront() {
        if (this.head == null) {
            return null;
        }
        this.head = this.head.next;
    }

    removeFromEnd() {
        let pointer = this.head;

        if (this.head == null || this.head.next == null) {
            this.head = null;
            return;
        }

        while (pointer.next.next != null) {
            pointer = pointer.next;
        }
        pointer.next = null;
    }

    print() {
        if (this.head == null) {
            console.log("List is empty");
        } else {
            let curr = this.head;
            let list = "";
            while (curr) {
                process.stdout.write(`${curr.value}<->`)
                list += `${curr.value}<->`;
                curr = curr.next;
            }
            process.stdout.write(`null`);
            // console.log(this.head.prev)
            // console.log(list);
        }
    }

    printReverse() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.tail;
            let list = "";
            while (curr) {
                list += `${curr.value}<->`;
                curr = curr.prev;
            }
            console.log(list);
        }
    }
}

const list = new DoublyLinkedList();
list.append(1);
list.append(2);
//   list.append(3);
//   list.append(67);
//   list.append(68);

//   list.print();
//   list.printReverse();
list.removeFromEnd();
//   list.print();
//   list.removeFromFront();
list.print();