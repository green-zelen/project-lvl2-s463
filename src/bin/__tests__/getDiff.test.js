import { getDiff } from '../genDiff';
import { readFile } from '../parsers';

const jsonBefore1 = readFile(`${__dirname}/__fixtures__/__txt__/1before.json`);
const jsonAfter1 = readFile(`${__dirname}/__fixtures__/__txt__/1after.json`);

const jsonBefore2 = readFile(`${__dirname}/__fixtures__/__txt__/2before.json`);
const jsonAfter2 = readFile(`${__dirname}/__fixtures__/__txt__/2after.json`);

const yamlBefore3 = readFile(`${__dirname}/__fixtures__/__txt__/3before.yml`);
const yamlAfter3 = readFile(`${__dirname}/__fixtures__/__txt__/3after.yml`);

const iniBefore4 = readFile(`${__dirname}/__fixtures__/__txt__/4before.ini`);
const iniAfter4 = readFile(`${__dirname}/__fixtures__/__txt__/4after.ini`);

const jsonBefore5 = readFile(`${__dirname}/__fixtures__/__txt__/5before.json`);
const jsonAfter5 = readFile(`${__dirname}/__fixtures__/__txt__/5after.json`);

const jsonBefore6 = readFile(`${__dirname}/__fixtures__/__txt__/6before.json`);
const jsonAfter6 = readFile(`${__dirname}/__fixtures__/__txt__/6after.json`);

const yamlBefore7 = readFile(`${__dirname}/__fixtures__/__txt__/7before.yml`);
const yamlAfter7 = readFile(`${__dirname}/__fixtures__/__txt__/7after.yml`);

const iniBefore8 = readFile(`${__dirname}/__fixtures__/__txt__/8before.ini`);
const iniAfter8 = readFile(`${__dirname}/__fixtures__/__txt__/8after.ini`);

test('compare two first jsons', () => {
  expect(getDiff(jsonBefore1, jsonAfter1)).toEqual(readFile(`${__dirname}/__fixtures__/__txt__/1expect.json`));
});

test('compare two second jsons', () => {
  expect(getDiff(jsonBefore2, jsonAfter2)).toEqual(readFile(`${__dirname}/__fixtures__/__txt__/2expect.json`));
});

test('compare two first yamls', () => {
  expect(getDiff(yamlBefore3, yamlAfter3)).toEqual(readFile(`${__dirname}/__fixtures__/__txt__/3expect.yml`));
});

test('compare two first inies', () => {
  expect(getDiff(iniBefore4, iniAfter4)).toEqual(readFile(`${__dirname}/__fixtures__/__txt__/4expect.ini`));
});

test('compare two nested jsons', () => {
  expect(getDiff(jsonBefore5, jsonAfter5)).toEqual(readFile(`${__dirname}/__fixtures__/__txt__/5expect.json`));
});

test('compare two short nested jsons', () => {
  expect(getDiff(jsonBefore6, jsonAfter6)).toEqual(readFile(`${__dirname}/__fixtures__/__txt__/6expect.json`));
});

test('compare two nested yamls', () => {
  expect(getDiff(yamlBefore7, yamlAfter7)).toEqual(readFile(`${__dirname}/__fixtures__/__txt__/7expect.yml`));
});

test('compare two nested inies', () => {
  expect(getDiff(iniBefore8, iniAfter8)).toEqual(readFile(`${__dirname}/__fixtures__/__txt__/8expect.ini`));
});
