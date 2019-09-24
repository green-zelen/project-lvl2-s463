import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as ini from 'ini';
import * as path from 'path';


export const getParser = (ext) => {
  switch (ext) {
    case '.json':
      return JSON.parse;
    case '.yml':
      return yaml.safeLoad;
    case '.ini':
      return ini.parse;

    default:
      console.log(`[ERROR] can't get parser for extname: ${ext}`);
      return 1;
  }
};

export const getExtention = filePath => path.extname(filePath);

export const readFile = (filePath, format) => fs.readFileSync(filePath, format);

export const getObject = (filePath) => {
  const parsing = getParser(getExtention(filePath));
  return parsing(readFile(filePath, 'utf-8'));
};

export default getObject;
