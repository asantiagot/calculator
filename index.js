#!/usr/bin/env node

const yargs = require("yargs");
const getCalculationQueues = require("./helpers/getCalculationQueues");
const calculate = require("./helpers/calculate");

// Get string input
const options = yargs
  .usage("Usage: -s '<operation_string>'")
  .option("s", { alias: "operation string", type: "string", demandOption: true })
  .argv;

const { s } = options;

// Get operands and operators
const { operands, operators } = getCalculationQueues(s);
const result = calculate(operands, operators);

console.log(`operands:`);
console.log(operands);
console.log(`operators:`);
console.log(operators)
console.log(`result:`);
console.log(result);
