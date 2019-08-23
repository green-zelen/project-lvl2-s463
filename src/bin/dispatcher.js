import _ from 'lodash';

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
];

const getKeys = (before, after) => {
  const keysOfAfter = Object.keys(after);
  const keysOfBefore = Object.keys(before);
  const getAllKeys = keysOfAfter.concat(keysOfBefore);
  const allKeysSet = new Set(getAllKeys);
  return [...allKeysSet];
};

const getDiff = (before, after) => {
  const keys = getKeys(before, after);
  return keys.map((key) => {
    let d = _.find(dispatcher, f => f.check(key, before, after));
    if (d === undefined) {
      d = { type: 'unknown', apply: () => ({ value: 'meh' }) };
    }
    const { type, apply } = d;
    return { key, type, ...apply(before, after, key) };
  });
};

const a = {
  timeout: {
    c: 1488,
  },
  verbose: true,
  host: 'hexlet.io',
};

const b = {
  host: 'hexlet.io',
  timeout: {
    a: 20,
    b: 49,
  },
  proxy: '123.234.53.22',
  follow: false,
};

getDiff(a, b);
const res = getDiff(a, b);
console.log(res);
