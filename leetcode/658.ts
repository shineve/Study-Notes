var findClosestElements = function (arr, k, x) {
  let idx = 0;
  while (k < arr.length - idx) {
    const last = arr.pop();
    if (Math.abs(last - x) < Math.abs(arr[idx] - x)) {
      idx++;
      arr.push(last);
    }
    console.log(`idx: ${idx} -> ${arr}`);
  }
  return arr.slice(idx);
};

console.log(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9));
