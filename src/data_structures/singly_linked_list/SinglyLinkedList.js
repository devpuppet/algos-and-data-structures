const Node = require('./Node').Node;

module.exports.SinglyLinkedList = class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    toString() {
        return this.head ? this.head.toString() : "EMPTY";
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;

        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        const oldHead = this.head;
        this.head = this.head.next;
        this.length -= 1;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }

    unshift(value) {
        const newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;
        this.length += 1;
        if (this.length === 1) {
            this.tail = this.head;
        }
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let counter = 0;
        let node = this.head;
        while (counter !== index) {
            counter++;
            node = node.next;
        }
        return node;
    }

    set(index, value) {
        const node = this.get(index);
        if (node) {
            node.val = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            return !!this.push(value);
        }
        if (index === 0) {
            return !!this.unshift(value);
        }
        const insertedNode = new Node(value);
        const previousNode = this.get(index - 1);
        insertedNode.next = previousNode.next;
        previousNode.next = insertedNode;
        this.length += 1;
        return true;
    }
}