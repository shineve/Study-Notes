function partitionDisjoint(nums: number[]): number {
  let maxLeft = nums[0];
  let maxSoFar = nums[0];
  let pivot = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxSoFar) {
      maxSoFar = nums[i];
      console.log('maxSoFar -> ' + maxSoFar);
    }
    if (nums[i] < maxLeft) {
      maxLeft = maxSoFar;
      console.log('maxLeft -> ' + maxLeft);
      pivot = i;
      console.log('pivot -> ' + pivot);
    }
  }
  return pivot + 1;
}
