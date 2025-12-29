const sumAll = function(n1, n2) {

    if(n1 < 0 || n2 < 0 || !Number.isInteger(n1) || !Number.isInteger(n2))
        return `ERROR`;

    if(n1 > n2) {

        let aux = n1;
        n1 = n2;
        n2 = aux;
    }

    let nr = n2 - n1 + 1;
    return ((n1 + n2) * nr) / 2;
};

// Do not edit below this line
module.exports = sumAll;
