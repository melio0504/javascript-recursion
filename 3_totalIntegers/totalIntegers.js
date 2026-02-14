const isObject = (value) => typeof value === 'object' && value !== null;

export default function totalIntegers(arr) {  
  
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
