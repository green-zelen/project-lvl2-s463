import _ from 'lodash';

const makeDiff = (diff, depth) => {
  const stringify = (el, d) => (!_.isObject(el) ? el : makeDiff(el, d).concat(`${'    '.repeat(d - 1)}}`));
  const rep = ('    '.repeat(depth));
  const repCh = rep.slice(2);
  const renderMethodes = {
    equal: (acc, { key, value }) => acc.concat(`${rep}${key}: ${value}\n`),
    added: (acc, { key, value }) => acc.concat(`${repCh}+ ${key}: ${stringify(value, depth + 1)}\n`),
    deleted: (acc, { key, preValue }) => acc.concat(`${repCh}- ${key}: ${stringify(preValue, depth + 1)}\n`),
    changed: (acc, { key, value, preValue }) => acc.concat(
      `${repCh}- ${key}: ${stringify(preValue, depth + 1)}\n${repCh}+ ${key}: ${stringify(value, depth + 1)}\n`,
    ),
    children: (acc, { key, children }) => acc.concat(`${rep}${key}: ${makeDiff(children, depth + 1)}${rep}}\n`),
  };
  const filesDiff = diff.reduce((acc, el) => renderMethodes[el.type](acc, el), '{\n');
  return filesDiff;
};

const renderDiff = diff => makeDiff(diff, 1).concat('}');
export default renderDiff;
