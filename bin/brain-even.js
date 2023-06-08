#!/usr/bin/env node
import { runEngine } from '../src/index.js';
import { getRandomInt, isEven } from '../src/cli.js';

function brainEven() {
    const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
    const maxInt = 100;
    const round = () => {
        const question = getRandomInt(maxInt);
        const answer = isEven(question)? 'yes': 'no';
        return [question,answer];
    }
    runEngine(rules,  round);
};
brainEven();