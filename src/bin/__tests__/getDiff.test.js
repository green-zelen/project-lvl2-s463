import * as fs from 'fs';
import { getSortedAst } from '../genDiff';
import { readFile } from '../parsers';
import renderDiff from '../__formatters__/renderDiff';

const jsonBefore1 = readFile(`${__dirname}/__fixtures__/__txt__/1before.json`);
const jsonAfter1 = readFile(`${__dirname}/__fixtures__/__txt__/1after.json`);

const yamlBefore2 = readFile(`${__dirname}/__fixtures__/__txt__/2before.yml`);
const yamlAfter2 = readFile(`${__dirname}/__fixtures__/__txt__/2after.yml`);

const iniBefore3 = readFile(`${__dirname}/__fixtures__/__txt__/3before.ini`);
const iniAfter3 = readFile(`${__dirname}/__fixtures__/__txt__/3after.ini`);

const jsonBefore4 = readFile(`${__dirname}/__fixtures__/__txt__/4before.json`);
const jsonAfter4 = readFile(`${__dirname}/__fixtures__/__txt__/4after.json`);

const yamlBefore5 = readFile(`${__dirname}/__fixtures__/__txt__/5before.yml`);
const yamlAfter5 = readFile(`${__dirname}/__fixtures__/__txt__/5after.yml`);

const iniBefore6 = readFile(`${__dirname}/__fixtures__/__txt__/6before.ini`);
const iniAfter6 = readFile(`${__dirname}/__fixtures__/__txt__/6after.ini`);

test('compare two jsons', () => {
  expect(renderDiff(getSortedAst(jsonBefore1, jsonAfter1))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/__txt__/1expect.txt`, 'utf-8'));
});

test('compare two yamls', () => {
  expect(renderDiff(getSortedAst(yamlBefore2, yamlAfter2))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/__txt__/2expect.txt`, 'utf-8'));
});

test('compare two inies', () => {
  expect(renderDiff(getSortedAst(iniBefore3, iniAfter3))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/__txt__/3expect.txt`, 'utf-8'));
});

test('compare two inline jsons', () => {
  expect(renderDiff(getSortedAst(jsonBefore4, jsonAfter4))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/__txt__/4expect.txt`, 'utf-8'));
});

test('compare two inline  yamls', () => {
  expect(renderDiff(getSortedAst(yamlBefore5, yamlAfter5))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/__txt__/5expect.txt`, 'utf-8'));
});

test('compare two inline inies', () => {
  expect(renderDiff(getSortedAst(iniBefore6, iniAfter6))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/__txt__/6expect.txt`, 'utf-8'));
});
