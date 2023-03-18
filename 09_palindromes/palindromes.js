const palindromes = function (str) {
    // convert string to lowercase and remove all non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // compare the reversed string with the original string
    return str === str.split('').reverse().join('');
};


console.log(palindromes('racecar'));
// Do not edit below this line
module.exports = palindromes;
