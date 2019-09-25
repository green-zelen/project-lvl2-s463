#!/usr/bin/env node

import {
  getSortedAst,
} from './genDiff';
import renderDiff from './__formatters__/renderDiff';
import renderPlain from './__formatters__/renderPlain';
import renderJson from './__formatters__/renderJson';
import {
  getObject,
} from './parsers';


const getRender = (format) => {
  switch (format) {
    case 'diff':
      return renderDiff;

    case 'plain':
      return renderPlain;

    case 'json':
      return renderJson;

    default:
      return renderDiff;
  }
};

const genDiff = (first, second, format) => {
  const ast = getSortedAst(getObject(first), getObject(second));

  const render = getRender(format);
  return render(ast);
};

export default genDiff;
