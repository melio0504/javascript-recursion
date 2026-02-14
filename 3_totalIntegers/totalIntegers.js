const isObject = (value) => typeof value === 'object' && value !== null;

const totalIntegers = function(arr) {  
  
  if (!isObject(arr)) { return };

  const eachElement = Object.values(arr);

  let total = 0;

  for (const value of eachElement) {
    if (Number.isInteger(value)) {
      total++;
    } else if (isObject(value)) {
     // Recursive Case
     total += totalIntegers(value);
    }
  }

  return total;
};
  
// Do not edit below this line
module.exports = totalIntegers;
