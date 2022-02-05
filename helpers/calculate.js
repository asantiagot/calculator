const getNormalizedOperands = require("./getNormalizedOperands");
const { multiply, divide, add, substract } = require("./operations");

// Get calculation result
const calculate = (operands, operators) => {
  const normalizedOperands = getNormalizedOperands(operands);
  // for now only doing one operation
    const a = normalizedOperands[0];
    const b = normalizedOperands[1];
    switch(operators[0]) {
    case '*': {
      return multiply(a, b);
    }
    case '/': {
      return divide(a, b);
    }
    case '+': {
      return add(a, b);
    }
    case '-': {
      return substract(a, b);
    }
  }
}

module.exports = calculate;