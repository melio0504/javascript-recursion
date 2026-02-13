const contains = function(obj, targetValue) {
  // Recursive Base
  if (typeof obj !== 'object' || obj === null ) {
    return Object.is(obj, targetValue);
  }

  // Recursive Case
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      if (Object.is(value, targetValue)) { return true;} 

      // If the current value inside the object is an object or an array, it's recurse time lol
      if (typeof value === 'object' && value !== null) {
        if (contains(value, targetValue)) {
          return true;
        }
      }
    }
  }

  return false;
};
  
// Do not edit below this line
module.exports = contains;
