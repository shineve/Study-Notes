function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  let flattenedMatrix: number[] = mat.flat();
  let reshapedMatrix: number[][] = [];

  if (flattenedMatrix.length !== r * c) return mat;

  for (let i = 0; i < r; i++) {
    reshapedMatrix.push(flattenedMatrix.splice(0, c));
  }
  return reshapedMatrix;
}
