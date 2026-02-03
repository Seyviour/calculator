function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }

  return a / b;
}

function exponent(a, b) {
  return a ** b;
}

function sqrt(x) {
  return Math.sqrt(x);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  exponent,
  sqrt,
};
