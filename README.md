
# Calculator CLI
Simple Calculator that receives string operation as a parameter and returns another string displaying the result in fractional form

## How to run
```
 npm install
 node . -s "<string operation>"
 node . -s "1/3 + 3_3/4"
    operands:
    [ '1/3', '3_3/4' ]
    operators:
    [ '+' ]
    result:
    49/12
```

## How to run tests
```
npm run test
```

## How it works
The logic followed is this:
1. Get operands and operators arrays
```
from ("5_3/1 + 1/2") to ['5_3/1', '1/2'] and ['+']
```
2. Send operands and operators to "main" calculate() function
3. Normalize the format of the fractions, to a fractional form represented as an array
```
1_3/2 becomes [5, 2]
1 becomes [1, 1]
5/7 becomes [5,7]
```
4. With the number in a normalized format, calculate the different operations
```
multiply denominator is fraction1 denominator * fraction2 denominator
1/2 * 5/8 -> denominator is: (2 * 8) = 16 
multiply numerator is fraction1 numerator * fraction2 numerator
1/2 * 5/8 -> numerator is: (1 * 5) = 5
result of multiply([1, 2], [5, 8]) is [5, 16]
```
5. Present user with the result
```
1/2 * 5/8 = `5/16` 
```
## Limitations
There are pieces of the code that can be improved. Right now there are these limitations:
- Assuming input does not have trailing whitespace or more than one space between operands and operators
- The result is not presented in mixed number form, if applicable
- The result is not presented in simplified fraction form, if applicable
- The result is not presented in whole number form, if applicable
- Only one operator is executed. Operations with more than one operators, such as 1/2 + 3/4 / 5_1/2, are not handled