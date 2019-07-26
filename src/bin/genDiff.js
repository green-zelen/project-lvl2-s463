import * as _ from 'lodash';

function getDiff(before, after) {
  const keysOfAfter = Object.keys(after);
  const keysOfBefore = Object.keys(before);

  const reducerForAfter = (accAfter, elementAfter) => {
    if (_.has(before, elementAfter)) {
      if (after[elementAfter] !== before[elementAfter]) {
        return { ...accAfter, [`- ${elementAfter}`]: before[elementAfter], [`+ ${elementAfter}`]: after[elementAfter] };
      }
      return { ...accAfter, [elementAfter]: after[elementAfter] };
    }
    return { ...accAfter, [`+ ${elementAfter}`]: after[elementAfter] };
  };

  const extraacc = keysOfAfter.reduce(reducerForAfter, {});
  const deleteKeys = keysOfBefore.filter((el => !(keysOfAfter.includes(el))));
  const reducerForBefore = (accBefore, elementBefore) => ({ ...accBefore, [`- ${elementBefore}`]: before[elementBefore] });
  return (deleteKeys.reduce(reducerForBefore, extraacc));
}

export default getDiff;
