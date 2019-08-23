import * as _ from 'lodash';

export function getDiff(before, after) {
  const keysOfAfter = Object.keys(after);
  const keysOfBefore = Object.keys(before);

  const reducerForAfter = (accAfter, el) => {
    if (_.has(before, el)) {
      if (after[el] !== before[el]) {
        if (typeof (after[el]) !== 'object') {
          return { ...accAfter, [`- ${el}`]: before[el], [`+ ${el}`]: after[el] };
        }
        if (typeof (before[el]) !== 'object') {
          return { ...accAfter, [`- ${el}`]: before[el], [`+ ${el}`]: after[el] };
        }
        return { ...accAfter, [el]: getDiff(before[el], after[el]) };
      }
      return { ...accAfter, [el]: after[el] };
    }
    if (after[el] === undefined) {
      return accAfter;
    }
    return { ...accAfter, [`+ ${el}`]: after[el] };
  };

  const extraacc = keysOfAfter.reduce(reducerForAfter, {});
  const deleteKeys = keysOfBefore.filter((el => !(keysOfAfter.includes(el))));
  const reducerForBefore = (accBefore, el) => ({ ...accBefore, [`- ${el}`]: before[el] });
  return deleteKeys.reduce(reducerForBefore, extraacc);
}

export default getDiff;
