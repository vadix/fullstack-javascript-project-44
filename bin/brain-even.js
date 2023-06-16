#!/usr/bin/env node
import runEngine from '../src/index.js';
import getRandomInRange from '../src/utils.js';

const isEven = (number) => number % 2 === 0;

function brainEven() {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const round = () => {
    const question = getRandomInRange();
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  };
  runEngine(rules, round);
}

brainEven();
