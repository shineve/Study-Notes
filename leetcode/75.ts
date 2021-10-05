/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let temp = {
    0: 0,
    1: 0,
    2: 0,
  };
  for (let i = 0; i < nums.length; i++) {
    temp[nums[i]] += 1;
  }

  Object.keys(temp).forEach((key, index) => {
    const val = parseInt(key);
    for(let i = 0; i < temp[key]; i++) {
      nums[i] = val;
    }
  });

  console.log(nums);
}

sortColors([2, 0, 2, 1, 1, 0]);
