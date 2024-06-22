// Export a function named 'calculateNumber' which takes two parameters 'a' and 'b' (default is 0)
module.exports = function calculateNumber(a, b = 0) {
  // Convert the parameters 'a' and 'b' to numbers
  const NumA = Number(a);
  const NumB = Number(b);
  
  // Check if either 'aNum' or 'bNum' is not a number (NaN), and if so, throw a TypeError
  if (Number.isNaN(NumA) || Number.isNaN(NumB))
    throw TypeError('Parameters must be numbers');
  
  // Round both 'aNum' and 'bNum' to the nearest integer and return their sum
  return Math.round(NumA) + Math.round(NumB);
};
