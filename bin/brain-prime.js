#!/usr/bin/env node
import runEngine from '../src/index.js';
import getRandomInRange from '../src/utils.js';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

function brainPrime() {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const round = () => {
    const question = getRandomInRange();
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
  };
  runEngine(rules, round);
}
brainPrime();
