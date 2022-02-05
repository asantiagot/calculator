const getNumberType = (operand) => {
  if (operand.includes('_')) {							// Is mixed number
    return 'mixed';
  }
  if (operand.length === 1) {							// Is whole number
    return 'whole';
  } 
  return 'fraction';
}

module.exports = getNumberType;