const getNormalizedFactors = require("./getNormalizedFactors");

const getNormalizedOperands = (operands) => {
  const normalized = [];
  for(let i = 0; i < operands.length; i++) {
    const operand = operands[i];
    normalized.push(getNormalizedFactors(operand));
  }
  return normalized;
}

module.exports = getNormalizedOperands;