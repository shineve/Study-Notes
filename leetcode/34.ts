function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1];
  const start = findFirstPosition(nums, target);
  if (nums[start] !== target) {
    return [-1, -1];
  }
  console.log('------------find last------------');
  const end = findLastPosition(nums, target);

  return [start, end];
}

function findFirstPosition(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    console.log('start, end -> ' + start + ' ' + end);
    console.log('mid -> ' + mid);
    if (nums[mid] < target) {
      start = mid + 1;
      console.log('start -> ' + start);
      // [mid + 1,end]
    } else {
      end = mid;
      console.log('end -> ' + end);
      // [start, mid]
    }
  }

  console.log('end: start, end -> ' + start + ' ' + end);

  return start;
}

function findLastPosition(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor(start + (end - start + 1) / 2);
    console.log('start, end -> ' + start + ' ' + end);
    console.log('mid -> ' + mid);
    if (nums[mid] > target) {
      end = mid - 1;
      console.log('end -> ' + end);
      // [start, mid - 1]
    } else {
      start = mid;
      console.log('start -> ' + start);
      // [mid, end]
    }
  }

  console.log('end: start, end -> ' + start + ' ' + end);
  return end;
}

searchRange([5, 7, 7, 8, 8, 10], 8);
