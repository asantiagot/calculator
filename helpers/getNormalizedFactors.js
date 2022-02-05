
const getNumberType = require("./getNumberType");

const getNormalizedFactors = (operand) => {
  const numberType = getNumberType(operand);
  switch(numberType) {
    case 'mixed': {
      const factors = operand.split('/');
      const denominator = Number(factors[1]);
      const [whole, tempNumerator] = factors[0].split('_');
      const numerator = whole * denominator + Number(tempNumerator); 
      return [numerator, denominator];
    }
    case 'whole': {
     const numerator = operand;
     const denominator = 1;
     return [numerator, denominator];
    }
    case 'fraction': {
      const factors = operand.split('/');
      const denominator = Number(factors[1]);
      const numerator = Number(factors[0]);
      return [numerator, denominator];
    }
  }
}

module.exports = getNormalizedFactors;