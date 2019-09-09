#!/usr/bin/env node
import program from 'commander';
import { getSortedAst } from './genDiff';
import renderDiff from './__formatters__/renderDiff';
import renderPlain from './__formatters__/renderPlain';
import renderJson from './__formatters__/renderJson';
import { readFile } from './parsers';


let firstFile;
let secondFile;

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    firstFile = firstConfig;
    secondFile = secondConfig;
  })
  .option('-f, --format [type]', 'Output format');

program.parse(process.argv);

if (process.argv.slice(2).length === 0) {
  console.log(`[INFO] cli args len: ${process.argv.slice(2).length}`);

  program.outputHelp();
  process.exit(1);
}
const first = readFile(firstFile);
const second = readFile(secondFile);
const ast = getSortedAst(first, second);

let renderResult;

switch (program.format) {
  case 'diff':
    renderResult = renderDiff(ast);
    break;
  case 'plain':
    renderResult = renderPlain(ast);
    break;
  case 'json':
    renderResult = renderJson(ast);
    break;
  default:
    renderResult = renderDiff(ast);
    break;
}
console.log(renderResult);
