#!/usr/bin/env node
import _ from 'lodash';
import program from 'commander';
import { getAst } from './genDiff';
import renderDiff from './renderDiff';
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

const ast = getAst(first, second);
const recSort = (rt) => {
  rt = rt.map(el =>  _.has(el, 'children') ? { ...el, children: recSort(el.children) } : el);
  return _.sortBy(rt, el => el.key);
};

const sortedAst = recSort(ast);

console.log(sortedAst[1].children);

const renderResult = renderDiff(sortedAst);
console.log(renderResult);
