const maxSubarraySum = require('./maxSubarraySum');

console.log("Naive solution: " + maxSubarraySum.naiveSolution([2,7,1,8,15,2,4,6], 2));
console.log("Naive solution: " + maxSubarraySum.naiveSolution([2,7,1,8,15,2,4,6], 4));
console.log("Naive solution (null): " + maxSubarraySum.naiveSolution([1], 2));