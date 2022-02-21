import MaxHeap from './max-heap';

// user heaps to get median of a list of numbers efficiently
class MedianHeap {
  values: Array<number>;
  maxHeap: MaxHeap;
  minHeap: MaxHeap;
  constructor() {
    this.values = [];
    this.maxHeap = new MaxHeap();
    this.minHeap = new MaxHeap();
  }

  insert(array: Array<number>) {
    this.values = array;
    // split array into two, max heap and min heap, and extra element always go to max heap first
    const middleIndex = Math.ceil(array.length / 2);
    const left = array.slice(0, middleIndex);
    //  transform maxheap to min heap by multiply all values by -1
    const right = array.slice(middleIndex).map(ele => ele * -1);
    this.maxHeap.buildHeap(left);
    this.minHeap.buildHeap(right);
  }

  get median() {
    // if the array length is odd, the root node of the max heap is the median
    if (this.values.length % 2 === 1) {
      return this.maxHeap.peek();
    } else {
    // if the array length is even, the sum of the roots then divide by 2 is the median
      return (this.maxHeap.peek() + this.minHeap.peek() * -1) / 2;
    }
  }
}

export default MedianHeap;
