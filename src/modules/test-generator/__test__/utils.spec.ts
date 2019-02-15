import { generateRandom, shuffle } from '../utils';

describe('# test generator utils', () => {
  it('should generate a random array based on max number and total', () => {
    expect(generateRandom(10, 5)).toHaveLength(5);
  });
  it('should shuffle an array', () => {
    const arr = [1, 2, 3, 4];
    expect(shuffle(arr)).not.toEqual([1, 2, 3, 4]);
  });
});
