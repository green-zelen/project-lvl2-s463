const makeDiff = (diff) => {
  const renderMethodes = {
    equal: (acc, { key, value }) => ({ ...acc, [`  ${key}`]: value }),
    added: (acc, { key, value }) => ({ ...acc, [`+ ${key}`]: value }),
    deleted: (acc, { key, preValue }) => ({ ...acc, [`- ${key}`]: preValue }),
    changed: (acc, { key, value, preValue }) => ({
      ...acc,
      [`- ${key}`]: preValue,
      [`+ ${key}`]: value,
    }),
    children: (acc, { key, children }) => ({ ...acc, [`  ${key}`]: makeDiff(children) }),
  };

  const filesDiff = diff.reduce((acc, el) => renderMethodes[el.type](acc, el), {});
  return filesDiff;
};

const renderDiff = diff => JSON.stringify(makeDiff(diff), null, 2).replace(/"/g, '').replace(/,/g, '');

export default renderDiff;
