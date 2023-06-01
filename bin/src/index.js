import readlineSync from 'readline-sync';
import brainGame from './cli.js';

function brainEven() {
  const name = brainGame();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const guessNumber = Math.floor(Math.random() * 11);
    const question = readlineSync.question(`${'Question: '}${guessNumber}${'\nYour answer: '}`);
    if ((guessNumber % 2 === 0 && question === 'yes') || (guessNumber % 2 !== 0 && question === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${question} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

function brainCalc() {
    const name = brainGame();
    const symbol = ['+', '-', '*'];
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i += 1) {
      const randomNumber1 = Math.floor(Math.random() * 11);
      const randomNumber2 = Math.floor(Math.random() * 11);
      const randomSymbol = symbol[Math.floor(Math.random() * 3)];
      let answer;
      // eslint-disable-next-line default-case
      switch (randomSymbol) {
        case '+':
          answer = randomNumber1 + randomNumber2;
          break;
        case '-':
          answer = randomNumber1 - randomNumber2;
          break;
        case '*':
          answer = randomNumber1 * randomNumber2;
          break;
      }
  
      const userAnswer = readlineSync.question(`${'Question: '}${randomNumber1} ${randomSymbol} ${randomNumber2}${'\nYour answer: '}`);
      if (userAnswer === String(answer)) {
        console.log('Correct!');
      } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${name}!`);
        return;
      }
    }
    console.log(`Congratulations, ${name}!`);
  };

  function brainGCD() {
    const name = brainGame();
    console.log('Find the greatest common divisor of given numbers.');


    for (let i = 0; i < 3; i += 1) {
        const randomNumber1 = Math.floor(Math.random() * 101);
        const randomNumber2 = Math.floor(Math.random() * 101);
        const question = readlineSync.question(`${'Question: '}${randomNumber1} ${randomNumber2}${'\nYour answer: '}`);
        const answer = NOD(randomNumber1, randomNumber2)
        if (question === String(answer)) {
          console.log('Correct!');
        } else {
          console.log(`${question} is wrong answer ;(. Correct answer was '${answer}.\nLet's try again, ${name}!`);
          return;
        }
      }
      console.log(`Congratulations, ${name}!`);




    function NOD(x, y) {
        if (y > x) return NOD(y, x);
        if (!y) return x;
        return NOD(y, x % y);
      }
  }


  function brainProgression() {
    const name = brainGame();
    console.log('What number is missing in the progression?');
    for (let i = 0; i < 3; i += 1) {
    const start = Math.floor(Math.random() * 5);
    const step = Math.floor(Math.random() * 5);
    const question = Math.floor(Math.random() * 5);
    const array = [];
    
    for (let i = 1; i < 11; i++) {
      let current = start + i * step;
      array.push(current);
    }
    const answer = array[question];
    array[question] = '..';
 
    console.log();
    const userAnswer = readlineSync.question(`Question: ${array.join(' ')}${'\nYour answer: '}`);
    if (answer == userAnswer){
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${name}!`);
      return;
    }
  }
    console.log(`Congratulations, ${name}!`);
  };

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  }

  function brainPrime() {
    const name = brainGame();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
      const guessNumber = Math.floor(Math.random() * 100);
      const question = readlineSync.question(`${'Question: '}${guessNumber}${'\nYour answer: '}`);
      if ((isPrime(guessNumber) == true && question === 'yes') || (isPrime(guessNumber) == false && question === 'no')) {
        console.log('Correct!');
      } else {
        console.log(`${question} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
        return;
      }
    }
    console.log(`Congratulations, ${name}!`);
  };
  export { brainEven, brainCalc, brainGCD, brainProgression, brainPrime };