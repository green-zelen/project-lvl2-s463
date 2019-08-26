import _ from 'lodash';
import renderDiff from './renderDiff';

const isObject = obj => typeof obj === 'object';

const dispatcher = [
  {
    type: 'equal',
    check: (key, before, after) => before[key] === after[key],
    apply: (before, after, key) => ({ value: before[key] }),
  },
  {
    type: 'added',
    check: (key, before) => !_.has(before, key),
    apply: (before, after, key) => ({ value: after[key] }),
  },
  {
    type: 'deleted',
    check: (key, before, after) => !_.has(after, key),
    apply: (before, after, key) => ({ preValue: before[key] }),
  },
  {
    type: 'children',
    check: (key, before, after) => isObject(before[key]) && isObject(after[key]),
    apply: (before, after, key, genDiff) => ({ children: genDiff(before[key], after[key]) }),
  },
  {
    type: 'changed',
    check: (key, before, after) => before[key] !== after[key],
    apply: (before, after, key) => ({ preValue: before[key], value: after[key] }),
  },
];

const getKeys = (before, after) => {
  const keysOfAfter = Object.keys(after);
  const keysOfBefore = Object.keys(before);
  const getAllKeys = keysOfAfter.concat(keysOfBefore);
  const allKeysSet = new Set(getAllKeys);
  return [...allKeysSet];
};

const getAst = (before, after) => {
  const keys = getKeys(before, after);
  return keys.map((key) => {
    let d = _.find(dispatcher, f => f.check(key, before, after));
    if (d === undefined) {
      d = { type: 'unknown', apply: () => ({ value: 'meh' }) };
    }
    const { type, apply } = d;
    return { key, type, ...apply(before, after, key, getAst) };
  });
};

const a = {
  common: {
    setting1: 'Value 1',
    setting2: '200',
    setting3: true,
    setting6: {
      key: 'value',
    },
  },
  group1: {
    baz: 'bas',
    foo: 'bar',
    nest: {
      key: 'value',
    },
  },
  group2: {
    abc: '12345',
  },
};

const b = {
  common: {
    follow: false,
    setting1: 'Value 1',
    setting3: {
      key: 'value',
    },
    setting4: 'blah blah',
    setting5: {
      key5: 'value5',
    },
    setting6: {
      key: 'value',
      ops: 'vops',
    },
  },
  group1: {
    foo: 'bar',
    baz: 'bars',
    nest: 'str',
  },

  group3: {
    fee: '100500',
  },
};

renderDiff(getAst(a, b));
