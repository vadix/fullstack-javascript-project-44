#!/usr/bin/env node
import { runEngine } from '../src/index.js';
import { getRandomInt, gcd } from '../src/cli.js';

function brainGCD() {
    const rules = 'Find the greatest common divisor of given numbers.';
    const maxInt = 100;
    const round = () => {
        const randomNumber1 = getRandomInt(maxInt);
        const randomNumber2 = getRandomInt(maxInt);
        const question = `${randomNumber1} ${randomNumber2}`;
        const answer = String(gcd(randomNumber1, randomNumber2));
        return [question,answer];
    }
    runEngine(rules,  round);
}

brainGCD();