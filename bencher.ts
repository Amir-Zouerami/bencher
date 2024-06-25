interface BenchmarkResult {
    name: string;
    duration: number;
}

function measureTime(fn: () => void): number {
    const start = performance.now();
    fn();
    const end = performance.now();
    return end - start;
}

function benchmark(functions: { name: string; fn: () => void }[]): BenchmarkResult[] {
    return functions.map(({ name, fn }) => ({
        name,
        duration: measureTime(fn),
    }));
}

function printResults(results: BenchmarkResult[]): string {
    const [first, second] = results;
    const percentageDifference = ((second.duration - first.duration) / first.duration) * 100;

    const resultString =
        `${first.name}: ${first.duration.toFixed(2)}ms\n` +
        `${second.name}: ${second.duration.toFixed(2)}ms\n` +
        `${second.name} is ${Math.abs(percentageDifference).toFixed(2)}% ` +
        `${percentageDifference > 0 ? 'slower' : 'faster'} than ${first.name}`;

    console.log(resultString);
    return resultString;
}

export { measureTime, benchmark, printResults, type BenchmarkResult };
