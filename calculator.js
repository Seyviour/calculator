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

function sin(x) {
  return Math.sin(x);
}

function cos(x) {
  return Math.cos(x);
}

function tan(x) {
  return Math.tan(x);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  exponent,
  sqrt,
  sin,
  cos,
  tan,
};
