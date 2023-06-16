#!/usr/bin/env node
import runEngine from '../src/index.js';
import getRandomInRange from '../src/utils.js';

function gcd(x, y) {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
}

function brainGCD() {
  const rules = 'Find the greatest common divisor of given numbers.';
  const round = () => {
    const randomNumber1 = getRandomInRange();
    const randomNumber2 = getRandomInRange();
    const question = `${randomNumber1} ${randomNumber2}`;
    const answer = String(gcd(randomNumber1, randomNumber2));
    return [question, answer];
  };
  runEngine(rules, round);
}

brainGCD();
