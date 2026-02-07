const add = function(n1, n2) {

  return n1 + n2;
};

const subtract = function(n1, n2) {
	
  return n1 - n2;
};

const sum = function(arr) {
	
  return arr.reduce((sum, curr) => {

    return sum + curr;
  }, 0);
};

const multiply = function(arr) {

  return arr.reduce((p, curr) => {

    return p * curr;
  }, 1);
};

const power = function(a, b) {
	
  return a ** b;
};

const factorial = function(n) {
	
  if(n == 0 || n == 1)
    return 1;

  return n * factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
