class MaxHeap {
  values: Array<number>
  constructor() {
    this.values = [];
  }

  // index of the parent node
  parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  // index of the left child node
  leftChild(index: number) {
    return index * 2 + 1;
  }

  // index of the right child node
  rightChild(index: number) {
    return index * 2 + 2;
  }

  // returns true if index is of a node that has no children
  isLeaf(index: number) {
    return index >= Math.floor(this.values.length / 2) && index <= this.values.length - 1;
  }

  insert(value: number) {
    this.values.push(value);
    const index = this.values.length - 1;
    this.heapifyUp(index);
  }

  peek() {
    return this.values[0];
  }

  // swap using ES6 destructuring
  swap(index1: number, index2: number) {
    [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
  }

  heapifyUp(index: number) {
    let currentIndex = index;
    let parentIndex = this.parent(currentIndex);

    // while we haven't reached the root node and the current element is greater than its parent node
    while (currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
      // swap elements
      this.swap(currentIndex, parentIndex);
      // move up the binary heap
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }

  heapifyDown(index: number) {
    while (!this.isLeaf(index)) {
      const leftChildIndex = this.leftChild(index);
      const rightChildIndex = this.rightChild(index);

      // start out the largest index at parent index
      let largestIndex = index;

      // if the left child > parent
      if (this.values[leftChildIndex] > this.values[largestIndex]) {
        // reassign largest index to left child index
        largestIndex = leftChildIndex;
      }

      // if the right child > parent
      if (this.values[rightChildIndex] >= this.values[largestIndex]) {
        // reassign largest index to right child index
        largestIndex = rightChildIndex;
      }

      // if the largest index is not the parent index
      if (largestIndex !== index) {
        this.swap(index, largestIndex);
        // recursively move down the heap
        this.heapifyDown(largestIndex);
      } else {
        break;
      }
    }
  }

  // removes and returns max element
  extractMax() {
    if (this.values.length === 0) throw new Error('heap is empty');

    // get max and last element;
    const max = this.values[0];
    const end = this.values.pop()!;

    this.values[0] = end;
    this.heapifyDown(0);

    return max;
  }

  buildHeap(array: Array<number>) {
    this.values = array;
    // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
    for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }
}

export default MaxHeap;
