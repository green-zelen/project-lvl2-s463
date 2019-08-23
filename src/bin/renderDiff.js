export const renderJson = obj => JSON.stringify(obj);

export const renderDiff = (obj, firstExt, secondExt) => {
  if (firstExt === secondExt) {
    if (firstExt === 'json') {
      return renderJson(obj);
    }
  }
  console.log(`[ERROR] can't render the different extnames: ${firstExt}, ${secondExt}`);
  return 0;
};
export default renderDiff;
