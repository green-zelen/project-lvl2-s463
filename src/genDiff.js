import _ from 'lodash';

export const isObject = obj => typeof obj === 'object';

const checkObj = (el, gen) => (_.isObject(el) ? gen(el, el) : el);

const dispatcher = [
  {
    type: 'equal',
    check: (key, before, after) => before[key] === after[key],
    apply: (before, after, key) => ({ value: before[key] }),
  },
  {
    type: 'added',
    check: (key, before) => !_.has(before, key),
    apply: (before, after, key, genDiff) => ({ value: checkObj(after[key], genDiff) }),
  },
  {
    type: 'deleted',
    check: (key, before, after) => !_.has(after, key),
    apply: (before, after, key, genDiff) => ({ preValue: checkObj(before[key], genDiff) }),
  },
  {
    type: 'children',
    check: (key, before, after) => isObject(before[key]) && isObject(after[key]),
    apply: (before, after, key, genDiff) => ({ children: genDiff(before[key], after[key]) }),
  },
  {
    type: 'changed',
    check: (key, before, after) => before[key] !== after[key],
    apply: (before, after, key, genDiff) => (
      { preValue: checkObj(before[key], genDiff), value: checkObj(after[key], genDiff) }
    ),
  },
];

export const getKeys = (before, after) => {
  const keysOfAfter = Object.keys(after);
  const keysOfBefore = Object.keys(before);
  const getAllKeys = keysOfAfter.concat(keysOfBefore);
  const allKeysSet = new Set(getAllKeys);
  return [...allKeysSet];
};

const recursionSort = (ast) => {
  const rt = ast.map(el => (_.has(el, 'children') ? { ...el, children: recursionSort(el.children) } : el));
  return _.sortBy(rt, el => el.key);
};

const getAst = (before, after) => {
  const keys = getKeys(before, after);
  const ast = keys.map((key) => {
    const foundNode = _.find(dispatcher, f => f.check(key, before, after));
    const { type, apply } = foundNode;
    return { key, type, ...apply(before, after, key, getAst) };
  });
  return ast;
};

export const getSortedAst = (b, a) => recursionSort(getAst(b, a));

export default getSortedAst;
