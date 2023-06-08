#!/usr/bin/env node
import { runEngine } from '../src/index.js';
import { getRandomInt, isPrime } from '../src/cli.js';
function brainPrime() {
    const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    const maxInt = 100;
    const round = () => {
        const question = getRandomInt(maxInt);
        const answer = isPrime(question)? 'yes': 'no';
        return [question,answer];
    }
    runEngine(rules,  round);

  };
brainPrime();