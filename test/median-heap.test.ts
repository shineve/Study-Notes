import MedianHeap from '../data-structures/median-heap';

describe('MedianHeap', () => {
  test('insert test: odd length array', () => {
    const medianHeap = new MedianHeap();
    medianHeap.insert([3, 4, 5, 7, 12, 19, 26]);

    expect(medianHeap.values).toEqual([3, 4, 5, 7, 12, 19, 26]);
    expect(medianHeap.maxHeap.values).toEqual([7, 4, 5, 3]);
    expect(medianHeap.minHeap.values).toEqual([-12, -19, -26]);
  });

  test('insert test: even length array', () => {
    const medianHeap = new MedianHeap();
    medianHeap.insert([3, 4, 5, 7, 8, 12, 19, 26]);

    expect(medianHeap.values).toEqual([3, 4, 5, 7, 8, 12, 19, 26]);
    expect(medianHeap.maxHeap.values).toEqual([7, 4, 5, 3]);
    expect(medianHeap.minHeap.values).toEqual([-8, -12, -19, -26]);
  });

  test('median test: odd length array', () => {
    const medianHeap = new MedianHeap();
    medianHeap.insert([3, 4, 5, 7, 12, 19, 26]);

    expect(medianHeap.median).toEqual(7);
  });

  test('median test: even length array', () => {
    const medianHeap = new MedianHeap();
    medianHeap.insert([3, 4, 5, 7, 8, 12, 19, 26]);

    expect(medianHeap.median).toEqual(7.5);
  });

  test('median test: short array', () => {
    const medianHeap = new MedianHeap();
    medianHeap.insert([3, 4, 5, 7, 12, 19, 26]);

    expect(medianHeap.median).toEqual(7);
  });

  test('median test: long array', () => {
    const medianHeap = new MedianHeap();
    medianHeap.insert([
      3, 14, 26, 3, 33, 21, 33, 31, 2, 30, 7, 8, 16, 24, 14, 11, 11, 37, 34, 10, 39, 8, 4, 32, 13,
      21, 13, 5, 6, 19, 28, 1, 24, 23, 40, 10, 32, 34, 4, 1696, 98, 78, 95, 22, 35, 54, 16, 67, 6,
      98, 81, 16, 14, 84, 49, 45, 78, 28, 18, 74, 56, 8, 12, 10, 78, 24, 28, 70, 44, 41, 27, 55, 53,
      79, 63, 7, 76, 55, 14, 79, 63, 86, 3, 89, 80, 81, 53, 18, 33, 57, 87, 64, 49, 12, 55, 5, 25,
      19, 33, 81, 35, 20, 8, 9, 46, 71, 47, 24, 80, 80, 18, 27, 57, 13, 79, 92, 70, 14, 3, 64, 40,
      3, 20, 33, 69, 70, 42, 81, 48, 81, 3, 23, 25, 18, 84, 36, 33, 23, 57,
    ]);

    expect(medianHeap.median).toEqual(33);
  });
});
