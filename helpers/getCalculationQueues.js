const getCalculationQueues = (s) => {
  const operands = [];
  const operators = [];
  let operand = "";

  for (let i = 0; i < s.length; i++) {
    if(s[i] !== " ") {
      operand = operand + s[i];
    } else {
      // bug: if the string contains white spaces at the beginning or the end, those will be incorrectly counted as operators ("   1/2 * 3_3/4")
      operands.push(operand);
      operand = "";
      operators.push(s[i+1]);
      i = i + 2;
    }
  }
  operands.push(operand);
  return { operands, operators };
}

module.exports = getCalculationQueues;