import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const round = () => {
    const question = getRandomInRange();
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
  };
  runEngine(rules, round);
};
