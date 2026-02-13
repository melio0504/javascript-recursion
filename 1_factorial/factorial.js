const factorial = function(n) {
  // Do not accept the following
  // Non-positive integer || Float number
  if (n < 0 || !Number.isInteger(n)) { return };

  // Recursive Base
  if (n === 0) { return 1 };

  // Recursive Case
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;
