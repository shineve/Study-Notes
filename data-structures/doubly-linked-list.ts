class DoublyLinkedListNode {
  val: number;
  prev: DoublyLinkedListNode | null;
  next: DoublyLinkedListNode | null;

  constructor(val: number) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  size: number;
  head: DoublyLinkedListNode | null;
  tail: DoublyLinkedListNode | null;

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
      counter += 1;
    }
    return curr.val;
  }

  addAtHead(val: number): void {
    const newNode = new DoublyLinkedListNode(val);
    if (this.head != null) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.size += 1;
  }

  addAtTail(val: number): void {
    const newNode = new DoublyLinkedListNode(val);
    if (this.tail != null) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = this.tail;
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
      let curr = this.head;
      const newNode = new DoublyLinkedListNode(val);
      while (counter < index) {
        curr = curr.next;
        counter += 1;
      }
      curr.prev.next = newNode;
      newNode.prev = curr.prev;
      newNode.next = curr;
      curr.prev = newNode;
      this.size += 1;
    }
  }

  deleteAtIndex(index: number): void {
    if (index > this.size - 1 || index < 0) return;
    else if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
    } else {
      let counter = 0;
      let curr = this.head;
      while (counter < index) {
        curr = curr.next;
        counter += 1;
      }
      if (curr.next) {
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
      } else {
        curr.prev.next = null;
        this.tail = curr.prev;
      }
      this.size -= 1;
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

export default DoublyLinkedList;
