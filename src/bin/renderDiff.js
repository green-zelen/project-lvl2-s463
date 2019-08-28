// todo: разобраться с импортами
const isObject = obj => typeof obj === 'object';

const makeDiff = (diff, depth) => {
  const rep = ('  '.repeat(depth));
  const repCh = rep.slice(2);
  const renderMethodes = {
    equal: (acc, { key, value }) => ({ ...acc, [`${rep}${key}`]: value }),
    added: (acc, { key, value }) => ({ ...acc, [`${repCh}+ ${key}`]: value }),
    deleted: (acc, { key, preValue }) => ({ ...acc, [`${repCh}- ${key}`]: preValue }),
    changed: (acc, { key, value, preValue }) => ({
      ...acc,
      [`${repCh}- ${key}`]: preValue,
      [`${repCh}+ ${key}`]: value,
    }),
    children: (acc, { key, children }) => ({ ...acc, [`${rep}${key}`]: makeDiff(children, depth + 1) }),
    added_has_children: (acc, { key, children }) => ({ ...acc, [`${repCh}+ ${key}`]: makeDiff(children, depth + 1) }),
    deleted_has_children: (acc, { key, children }) => ({ ...acc, [`${repCh}- ${key}`]: makeDiff(children, depth + 1) }),
  };
  const filesDiff = diff.reduce((acc, el) => renderMethodes[el.type](acc, el), {});
  return filesDiff;
};

const renderDiff = diff => JSON.stringify(makeDiff(diff, 1), null, 2).replace(/"/g, '').replace(/,/g, '');

export default renderDiff;
