const getCalculationQueues = require('./helpers/getCalculationQueues');
const getNormalizedFactors = require('./helpers/getNormalizedFactors');
const calculate = require('./helpers/calculate');

describe('calculator test suite', () => {
  it('gets correct operands and operators', () => {
    const { operands, operators } = getCalculationQueues("1/3 * 4_3/5"); 
    expect(operands).toEqual(['1/3', '4_3/5']);
    expect(operators).toEqual(["*"]);
    const { operands: operands2 , operators: operators2 } = getCalculationQueues("2_3/4 / 1");
    expect(operands2).toEqual(['2_3/4', '1']);
    expect(operators2).toEqual(['/']);
  });

  it('gets correct normalized factors', () => {
    const [a, b] = getNormalizedFactors('9/3');
    expect(a).toEqual(9);    // first fraction numerator
    expect(b).toEqual(3);    // first fraction denominator
    const [a1, b1] = getNormalizedFactors('3_1/2');
    expect(a1).toEqual(7);    // second fraction numerator
    expect(b1).toEqual(2);    // second fraction denominator
  });

  it('calculates operations correctly', () => {
    const multiply = calculate([`1/2`, `5/3`], ['*']);
    expect(multiply).toEqual('5/6');
    const divide = calculate([`3/4`, `9_1/2`], ['/']);
    expect(divide).toEqual('6/76');
    const add = calculate([`7/3`, `10/8`], ['+']);
    expect(add).toEqual('86/24');
    const substract = calculate([`31/8`, `2`], ['-']);
    expect(substract).toEqual('15/8');
  });

});

