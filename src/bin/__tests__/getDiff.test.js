import getDiff from '../genDiff';
import { readFile } from '../parsers';

const jsonBefore1 = readFile(`${__dirname}/__fixtures__/__txt__/1.1_before.json`);
const jsonAfter1 = readFile(`${__dirname}/__fixtures__/__txt__/1.2_after.json`);

const jsonBefore2 = readFile(`${__dirname}/__fixtures__/__txt__/2.1_before.json`);
const jsonAfter2 = readFile(`${__dirname}/__fixtures__/__txt__/2.2_after.json`);

const yamlBefore3 = readFile(`${__dirname}/__fixtures__/__txt__/3.1_before.yml`);
const yamlAfter3 = readFile(`${__dirname}/__fixtures__/__txt__/3.2_after.yml`);

test('compare two first jsons', () => {
  expect(getDiff(jsonBefore1, jsonAfter1)).toEqual(readFile(`${__dirname}/__fixtures__/__txt__/1.3_expect.json`));
});

test('compare two second jsons', () => {
  expect(getDiff(jsonBefore2, jsonAfter2)).toEqual(readFile(`${__dirname}/__fixtures__/__txt__/2.3_expect.json`));
});

test('compare two first yamls', () => {
  expect(getDiff(yamlBefore3, yamlAfter3)).toEqual(readFile(`${__dirname}/__fixtures__/__txt__/3.3_expect.yml`));
});
