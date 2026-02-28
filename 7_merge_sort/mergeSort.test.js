import { mergeSort } from "./mergeSort";

describe("mergeSort", () => {
  test("returns empty array when given empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("returns same array when given single element", () => {
    expect(mergeSort([73])).toEqual([73]);
  });

  test("returns already sorted array unchanged", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts random array correctly", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
      .toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("sorts another random array correctly", () => {
    expect(mergeSort([105, 79, 100, 110]))
      .toEqual([79, 100, 105, 110]);
  });

  test("throws error if input is not an array", () => {
    expect(() => mergeSort("not array")).toThrow(TypeError);
  });
});
