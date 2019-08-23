export const renderJson = (obj) => {
  const r = JSON.stringify(obj, null, '    ').replace(/"+/g, '').replace(/"-/g, '');
  return r;
};

export default renderJson;
