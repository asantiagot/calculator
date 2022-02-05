
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

## Limitations
There are pieces of the code that can be improved. Right now there are these limitations:
- Assuming input does not have trailing whitespace or more than one space between operands and operators
- The result is not presented in mixed number form, if applicable
- The result is not presented in simplified fraction form, if applicable
- The result is not presented in whole number form, if applicable