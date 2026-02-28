# Merge Sort Exercise

## Objective
Implement a recursive **Merge Sort** function in JavaScript that takes an array as input and returns a new array sorted in ascending order.

## Instructions

1. **Function Name:** `mergeSort`  
2. **Input:** An array of numbers (e.g., `[3, 1, 4]`)  
3. **Output:** A new array sorted in ascending order (e.g., `[1, 3, 4]`)  

## Requirements

- Use **recursion** to divide the array until subarrays of length 1 are reached.
- Merge the subarrays back together in sorted order.
- If the input is **not an array**, throw a `TypeError`.
- The function should correctly handle:
  - Empty arrays (`[]`)  
  - Arrays with a single element (`[73]`)  
  - Already sorted arrays  
  - Arrays with repeated numbers  

## Merge Sort Algorithm Steps

1. **Base Case:** If the array has 0 or 1 element, return the array.
2. **Divide:** Split the array into two halves.
3. **Conquer:** Recursively sort each half using `mergeSort`.
4. **Combine:** Merge the two sorted halves into a single sorted array using a helper function `merge(left, right)`.

---

## Example Usage

```javascript
mergeSort([])                     // → []
mergeSort([73])                   // → [73]
mergeSort([1, 2, 3, 4, 5])       // → [1, 2, 3, 4, 5]
mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) // → [0, 1, 1, 2, 3, 5, 8, 13]
mergeSort([105, 79, 100, 110])   // → [79, 100, 105, 110]