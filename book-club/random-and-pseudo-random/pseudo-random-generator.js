const seedrandom = require('seedrandom');
const randomNumber = seed => seedrandom(seed)();
const seed = 5;

// the result is generated depends on seed
// 1 seed always generate the same result
for (let i = 0; i < 3; i++) {
  console.log(`random with seed "${seed}": ${randomNumber(seed)}`);
}

// Browsers / Node.js Math.random() always generate random seed
// so the result is always different
for (let i = 0; i < 3; i++) {
  console.log(`Browser / Node.js Math.random: ${Math.random()}`);
}
