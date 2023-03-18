const fibonacci = function (n) {
    if (n < 0) {
        return 'OOPS';
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        // console.log(a);
        // console.log(b);
        // console.log(c);
        a = b;
        b = c;
    }
    return b;
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
