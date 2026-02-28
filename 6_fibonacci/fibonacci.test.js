import { fibs, fibsResc } from './fibonacci';

describe('fibs', () => {
  test('returns first 4 fibonacci numbers', () => {
    expect(fibs(4)).toEqual([0, 1, 1, 2]);
  });

  test('returns first 8 fibonacci numbers', () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

describe('fibsResc', () => {
  test('returns first 2 fibonacci numbers', () => {
    expect(fibsResc(2)).toEqual([0, 1]);
  });

  test('returns first 5 fibonacci numbers', () => {
    expect(fibsResc(5)).toEqual([0, 1, 1, 2, 3]);
  });
});
