#!/usr/bin/env node
import { runEngine } from '../src/index.js';
import { getRandomInt } from '../src/cli.js';
function brainCalc() {
    const rules = 'What is the result of the expression?';
    const symbol = ['+', '-', '*'];
    const maxInt = 100;
    const symobolInt = 3;
    const round = () => {
        const randomNumber1 = getRandomInt(maxInt);
        const randomNumber2 = getRandomInt(maxInt);
        const randomSymbol = symbol[getRandomInt(symobolInt)];
        const question = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;
        const answer = String(eval(question));
        return [question,answer];
    }
    runEngine(rules,  round);

};
brainCalc();