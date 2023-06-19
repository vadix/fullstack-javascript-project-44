import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const isEven = (number) => number % 2 === 0;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomInRange();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  runEngine(rules, generateRound);
};
