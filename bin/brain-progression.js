#!/usr/bin/env node
import { runEngine } from '../src/index.js';
import { getRandomInt } from '../src/cli.js';
function brainProgression() {
    const rules = 'What number is missing in the progression?';
    const maxInt = 5;
    const round = () => {
        const start = getRandomInt(maxInt);
        const step = getRandomInt(maxInt);
        const randomElement = getRandomInt(maxInt);
        const array = [];
        for (let i = 1; i < 11; i++) {
            let current = start + i * step;
            array.push(current);
        }
        const answer = String(array[randomElement]);
        array[randomElement] = '..';
        const question = array.join(' ');
        return [question, answer];
    }
    runEngine(rules, round);
};
brainProgression();