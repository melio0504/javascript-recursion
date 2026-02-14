export default function permutations(arr, index = 0, results = []) {
  // Recursive Base
  if (index == arr.length) {
    // Cloning array inside results
    results.push([...arr]);

    return results;
  }

  // Recursive Case
  for (let i = index; i < arr.length; i++) {
    [arr[index], arr[i]] = [arr[i], arr[index]];

    permutations(arr, index + 1, results);

    [arr[index], arr[i]] = [arr[i], arr[index]];
  }

  return results;
};
