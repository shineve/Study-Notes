class LinkedListNode {
  val: number;
  next: LinkedListNode;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  size: number;
  head: LinkedListNode;
  tail: LinkedListNode;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  get(index: number): number {
    if (index > this.size - 1 || index < 0) return -1;
    let counter = 0;
    let curr = this.head;
    while (counter < index) {
      curr = curr.next;
      counter++;
    }
    return curr.val;
  }

  addAtHead(val: number): void {
    const newNode = new LinkedListNode(val);
    if (this.head != null) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.size += 1;
  }

  addAtTail(val: number): void {
    const newNode = new LinkedListNode(val);
    if (this.tail != null) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.size += 1;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) {
      return;
    } else if (index === 0) {
      this.addAtHead(val);
    } else if (index === this.size) {
      this.addAtTail(val);
    } else {
      let counter = 0;
      let prev = null;
      let curr = this.head;
      while (counter < index) {
        prev = curr;
        curr = curr.next;
        counter++;
      }
      const newNode = new LinkedListNode(val);
      prev.next = newNode;
      newNode.next = curr;
      this.size++;
    }
  }

  deleteAtIndex(index: number): void {
    if (index > this.size - 1 || index < 0) return;
    else if (index === 0) {
      this.head = this.head.next;
      this.size--;
    } else {
      let counter = 0;
      let prev = null;
      let curr = this.head;
      while (counter < index) {
        prev = curr;
        curr = curr.next;
        counter++;
      }
      if (curr.next) {
        prev.next = curr.next;
      } else {
        prev.next = null;
        this.tail = prev;
      }
      this.size--;
    }
  }

  serialize(): number[] {
    let serialized = [];
    let curr = this.head;
    let counter = this.size;
    while (counter--) {
      serialized.push(curr.val);
      curr = curr.next;
    }

    return serialized;
  }
}
