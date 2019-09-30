import {
  getSortedAst,
} from './genDiff';
import getRender from './formatters/index';
import {
  getObject,
} from './parsers';

const genDiff = (first, second, format) => {
  const ast = getSortedAst(getObject(first), getObject(second));

  const render = getRender(format);
  return render(ast);
};

export default genDiff;
