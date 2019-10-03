import fs from 'fs';
import path from 'path';
import genDiff from '../src';

test.each([
  ['1before.json', '1after.json', '1expect.txt'],
  ['1before.json', '1after.json', '1expectPlain.txt', 'plain'],
  ['1before.json', '1after.json', '1expect.json', 'json'],
  ['2before.yml', '2after.yml', '2expect.txt'],
  ['2before.yml', '2after.yml', '2expectPlain.txt', 'plain'],
  ['2before.yml', '2after.yml', '2expect.json', 'json'],
  ['3before.ini', '3after.ini', '3expect.txt'],
  ['3before.ini', '3after.ini', '3expectPlain.txt', 'plain'],
  ['3before.ini', '3after.ini', '3expect.json', 'json'],
])(
  'genDiff(%s, %s)',
  (before, after, result, format = 'diff') => {
    const getPath = file => path.join('__tests__', '__fixtures__', file);
    const diffResult = genDiff(getPath(before), getPath(after), format);
    const expectedResult = fs.readFileSync(getPath(result), 'utf-8');
    expect(diffResult).toBe(expectedResult);
  },
);
