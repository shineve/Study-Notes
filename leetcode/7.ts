function reverse(x: number): number {
  let reversed = parseInt(x.toString().split('').reverse().slice(0, 31).join('').toString());
  if (x < 0) reversed *= -1;
  if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) return 0;
  else return reversed;
}
