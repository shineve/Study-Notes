// calculate average draws needed to get a 1% drop rate item
const rounds = 1000;
const drawCount = 100;
const dropRate = 0.01;
let avgDraw = 0;
let maxDraw = 0;
let minDraw = 0;
let failCount = 0;

for (let i = 0; i < rounds; i++) {
  let count = 0;
  let tempDropRate = dropRate;
  for (let j = 0; j < drawCount; j++) {
    if (Math.random() < tempDropRate) break;
    else {
      count++;
      tempDropRate = dropRate * count;
    }
  }
  if (count === drawCount) {
    failCount++;
    continue;
  } else {
    if (count > maxDraw) maxDraw = count;
    if (count < minDraw) minDraw = count;
  }
  avgDraw += count;
}
avgDraw = avgDraw / rounds;

// the average draw needed is close to the user expectation
// there is a big difference between minDraw and maxDraw
console.group('pseudo random distribution');
console.log("—————————— pseudo random distribution ——————————");
console.log('🚀 ~ file: random.js ~ line 25 ~ failCount', failCount);
console.log('🚀 ~ file: random.js ~ line 25 ~ avgDraw', avgDraw);
console.log('🚀 ~ file: random.js ~ line 18 ~ maxDraw', maxDraw);
console.log('🚀 ~ file: random.js ~ line 20 ~ minDraw', minDraw);
console.log("—————————— pseudo random distribution ——————————");
console.groupEnd();
