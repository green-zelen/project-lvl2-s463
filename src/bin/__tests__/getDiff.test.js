import getDiff from '../genDiff';
import { readJsonFile } from '../utilities';

// todo: разобраться что тут проиходит
const jsonBefore1 = readJsonFile(`${__dirname}/__fixtures__/__txt__/1.1_before_json_short.json`);
const jsonAfter1 = readJsonFile(`${__dirname}/__fixtures__/__txt__/1.2_after_json_short.json`);

const jsonBefore2 = readJsonFile(`${__dirname}/__fixtures__/__txt__/2.1_before_json_short.json`);
const jsonAfter2 = readJsonFile(`${__dirname}/__fixtures__/__txt__/2.2_after_json_short.json`);

test('compare two first jsons', () => {
  expect(getDiff(jsonBefore1, jsonAfter1)).toEqual(readJsonFile(`${__dirname}/__fixtures__/__txt__/1.3_expect_json_short.json`));
});

test('compare two second jsons', () => {
  expect(getDiff(jsonBefore2, jsonAfter2)).toEqual(readJsonFile(`${__dirname}/__fixtures__/__txt__/2.3_expect_json_short.json`));
});
