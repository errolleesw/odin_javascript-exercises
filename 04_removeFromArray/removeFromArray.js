const removeFromArray = function(arr, ...argToRemove) {
    return arr.filter(item => !argToRemove.includes(item))
};

console.log(removeFromArray(['one','two','three'],'one','two'));
// Do not edit below this line
module.exports = removeFromArray;
