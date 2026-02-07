const fibonacci = function(n) {

    let a = 1, b = 1, c;

    n = parseInt(n);

    if(n < 0)
        return "OOPS";

    if(n == 0)
        return 0;

    if(n === 1 || n === 2)
        return a;

    for(let i = 3; i <= n; ++i) {

        c = a + b; 
        a = b;
        b = c;
    }

    return c;
};

// Do not edit below this line
module.exports = fibonacci;
