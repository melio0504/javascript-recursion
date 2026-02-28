function fibs(n) {
  const array = [0, 1];

  for (let i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  return n === 1 ? [0] : array.slice(0, n);
}

// console.log(fibs(8));

function fibsResc(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const array = fibsResc(n - 1);
  array.push(array[array.length - 1] + array[array.length - 2]);

  return array;
}

// console.log(fibsResc(8))

export { fibs, fibsResc }
