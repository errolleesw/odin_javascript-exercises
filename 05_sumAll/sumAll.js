const sumAll = function(a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
      }
      if (a < 0 || b < 0) {
        return "ERROR";
      }
      
      let sum = 0;
      for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        sum += i;
      }
      return sum;
    };

console.log(sumAll(-1,'10'));
// Do not edit below this line
module.exports = sumAll;
