#!/usr/bin/env node
import program from 'commander';
import * as fs from 'fs';
import getDiff from './genDiff';

function readJsonFile(filePath) {
  return JSON.parse(fs.readFileSync(filePath));
}

let firstFile;
let secondFile;

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstCongig, secondConfig) => {
    firstFile = firstCongig;
    secondFile = secondConfig;
  })
  .option('-f, --format [type]', 'Output format');

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
  process.exit(1);
}
const firstJson = readJsonFile(firstFile);
const secondJson = readJsonFile(secondFile);

console.log(getDiff(firstJson, secondJson));
