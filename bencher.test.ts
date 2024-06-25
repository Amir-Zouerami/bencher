import { measureTime, benchmark, printResults, BenchmarkResult } from './bencher.ts';
import { assertEquals } from 'https://deno.land/std@0.224.0/assert/assert_equals.ts';

Deno.test('measureTime should return a number', () => {
    const duration = measureTime(() => {
        for (let i = 0; i < 1000; i++) {
            // nothing actually done
        }
    });

    assertEquals(typeof duration, 'number');
});

Deno.test('benchmark should return an array of BenchmarkResult', () => {
    const results = benchmark([
        {
            name: 'testFunction',
            fn: () => {
                for (let i = 0; i < 1000; i++) {
                    // nothing actually done
                }
            },
        },
    ]);

    assertEquals(results.length, 1);
    assertEquals(typeof results[0].name, 'string');
    assertEquals(typeof results[0].duration, 'number');
});

Deno.test('printResults should return a formatted string', () => {
    const results: BenchmarkResult[] = [
        { name: 'testFunction1', duration: 10 },
        { name: 'testFunction2', duration: 20 },
    ];
    
    const output = printResults(results);
    const expectedOutput = `testFunction1: 10.00ms\ntestFunction2: 20.00ms\ntestFunction2 is 100.00% slower than testFunction1`;
    assertEquals(output, expectedOutput);
});
