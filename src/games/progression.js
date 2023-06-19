import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'What number is missing in the progression?';
const minInt = 1;
const maxInt = 6;
const minLength = 5;
const maxLength = 15;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomInRange(minInt, maxInt);
  const step = getRandomInRange(minInt, maxInt);
  const length = getRandomInRange(minLength, maxLength);
  const randomElement = getRandomInRange(minInt, maxInt);
  const array = generateProgression(start, step, length);
  const answer = String(array[randomElement]);
  array[randomElement] = '..';
  const question = array.join(' ');
  return [question, answer];
};

export default () => {
  runEngine(rules, generateRound);
};
