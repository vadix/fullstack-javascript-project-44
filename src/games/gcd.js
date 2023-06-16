import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

function gcd(x, y) {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
}

const rules = 'Find the greatest common divisor of given numbers.';
const generateRound = () => {
  const randomNumber1 = getRandomInRange();
  const randomNumber2 = getRandomInRange();
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(gcd(randomNumber1, randomNumber2));
  return [question, answer];
};

export default () => {
  runEngine(rules, generateRound);
};
