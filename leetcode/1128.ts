function numEquivDominoPairs(dominoes: number[][]): number {
  let map = new Map();
  let count = 0;

  for (let [a, b] of dominoes) {
    const key = a < b ? `${a}${b}` : `${b}${a}`;

    if (!map.has(key)) {
      map.set(key, 0);
    } else {
      let keyCount = map.get(key) + 1;
      map.set(key, keyCount);
      count += keyCount;
    }
  }

  return count;
}
