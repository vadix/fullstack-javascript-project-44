import readlineSync from 'readline-sync';

const makeWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  return name;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const isEven = (number) => number % 2 === 0;

function gcd(x, y) {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

export { makeWelcome, getRandomInt, isEven, gcd, isPrime };