import { benchmark, printResults } from './bencher.ts';

const millionDollarArray = Array.from({ length: 1000000 }, (_, i) => i);

function simpleForLoop() {
    let counter = 0;

    for (let i = 0; i < millionDollarArray.length; i++) {
        counter++;
    }
}

function forOfLoop() {
    let counter = 0;

    for (const _item of millionDollarArray) {
        counter++;
    }
}

function forInLoop() {
    let counter = 0;

    for (const _key in millionDollarArray) {
        counter++;
    }
}

const results = benchmark([
    { name: 'simple-for-oop', fn: simpleForLoop },
    { name: 'for-of-loop', fn: forOfLoop },
    { name: 'for-in-loop', fn: forInLoop },
]);

printResults(results);
