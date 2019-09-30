import _ from 'lodash';

const makePlain = (ast, parents) => {
  const getComplexValue = el => (!_.isObject(el) ? el : '[complex value]');
  const renderMethodes = {
    equal: acc => acc,
    added: (acc, { key, value }) => acc.concat(`Property '${parents}${key}' was added with value: '${getComplexValue(value)}'\n`),
    deleted: (acc, { key }) => acc.concat(`Property '${parents}${key}' was removed\n`),
    changed: (acc, { key, value, preValue }) => acc.concat(
      `Property '${parents}${key}' was updated. From '${getComplexValue(preValue)}' to '${getComplexValue(value)}'\n`,
    ),
    children: (acc, { key, children }) => acc.concat(`${makePlain(children, `${parents}${key}.`)}`),
  };
  const filesPlain = ast.reduce((acc, el) => renderMethodes[el.type](acc, el), '');
  return filesPlain;
};

const renderPlain = ast => makePlain(ast, '');
export default renderPlain;
