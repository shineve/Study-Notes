class QueueNode {
  val: number;
  next: QueueNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  size: number;
  head: QueueNode | null;
  tail: QueueNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enQueue(val: number): void {
    const newNode = new QueueNode(val);
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  deQueue(): QueueNode | null {
    if (!this.head) return null;
    else {
      const removedTemp = this.head;
      this.head = this.head.next;
      this.size -= 1;

      return removedTemp;
    }
  }
}

export default Queue;
