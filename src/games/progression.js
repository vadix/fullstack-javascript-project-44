import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'What number is missing in the progression?';
const minInt = 0;
const maxInt = 5;
const generateRound = () => {
  const start = getRandomInRange(minInt, maxInt);
  const step = getRandomInRange(minInt, maxInt);
  const randomElement = getRandomInRange(minInt, maxInt);
  const array = [];
  for (let i = 1; i < 11; i += 1) {
    const current = start + i * step;
    array.push(current);
  }
  const answer = String(array[randomElement]);
  array[randomElement] = '..';
  const question = array.join(' ');
  return [question, answer];
};
export default () => {
  runEngine(rules, generateRound);
};
