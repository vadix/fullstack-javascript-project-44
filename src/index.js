import readlineSync from 'readline-sync';
import { makeWelcome } from '../src/cli.js';

const roundsCount = 3;
const runEngine = (rules, makeRound) => {
  const name = makeWelcome();
  console.log(rules);
  for (let i = 0; i < roundsCount; i++) {
    const [question, correctAnswer] = makeRound();
    console.log(`Question: ${question}` );
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export { runEngine };