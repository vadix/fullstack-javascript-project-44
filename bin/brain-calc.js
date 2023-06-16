#!/usr/bin/env node
import runEngine from '../src/index.js';
import getRandomInRange from '../src/utils.js';

function brainCalc() {
  const rules = 'What is the result of the expression?';
  const calculation = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        throw new Error(`Invalid operator - ${operator}`);
    }
  };
  const symbol = ['+', '-', '*'];

  const round = () => {
    const num1 = getRandomInRange();
    const num2 = getRandomInRange();
    const operator = symbol[getRandomInRange(0, 2)];
    const question = `${num1} ${operator} ${num2}`;
    const answer = String(calculation(num1, num2, operator));
    return [question, answer];
  };
  runEngine(rules, round);
}

brainCalc();
