#!/usr/bin/env node
import readlineSync from 'readline-sync';
import brainGame from './src/cli.js';

const brainEven = () => {
  const name = brainGame();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const guessNumber = Math.floor(Math.random() * 11);
    const question = readlineSync.question(`${'Question: '}${guessNumber}${'\nYour answer: '}`);
    if ((guessNumber % 2 === 0 && question === 'yes') || (guessNumber % 2 !== 0 && question === 'no')) {
      console.log('Coorect!');
    } else {
      console.log(`${question} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEven();
