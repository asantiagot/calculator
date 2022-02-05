// Calculate operators
const multiply = (a, b) => {
  const numerator = a[0] * b[0];
  const denominator = a[1] * b[1];
  return `${numerator}/${denominator}`;
};

const divide = (a, b) => {
  const numerator = a[0] * b[1];
  const denominator = a[1] * b[0];
  return `${numerator}/${denominator}`;
};

const add = (a, b) => {
  const denominator = a[1] * b[1];
  const numerator = denominator / a[1] * a[0] + denominator / b[1] * b[0];
  return `${numerator}/${denominator}`;
};

const substract = (a, b) => {
  const denominator = a[1] * b[1]; 
  const numerator = denominator / a[1] * a[0] - denominator / b[1] * b[0];
  return `${numerator}/${denominator}`;
};

module.exports = { multiply, divide, add, substract };