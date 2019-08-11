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

const jsonExtraBefore = readFile(`${__dirname}/__fixtures__/__txt__/6before.json`);
const jsonExtraAfter = readFile(`${__dirname}/__fixtures__/__txt__/6after.json`);

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

test('compare two level inies', () => {
  expect(getDiff(jsonBefore5, jsonAfter5)).toEqual(readFile(`${__dirname}/__fixtures__/__txt__/5expect.json`));
});

test('compare two short level inies', () => {
  expect(getDiff(jsonExtraBefore, jsonExtraAfter)).toEqual(readFile(`${__dirname}/__fixtures__/__txt__/6expect.json`));
});
