import * as yaml from 'js-yaml';
import * as ini from 'ini';
import * as path from 'path';

const fs = require('fs');

export const getParser = (ext) => {
  switch (ext) {
    case '.json':
      return JSON.parse;
    case '.yml':
      return yaml.safeLoad;
    case '.ini':
      return ini.parse;

    default:
      throw new Error(`[Can't get parser for extension: ${ext}`);
  }
};

export const getExtention = filePath => path.extname(filePath);

export const readFile = (filePath, format) => fs.readFileSync(filePath, format);

export const getObject = (filePath) => {
  const parsing = getParser(getExtention(filePath));
  return parsing(readFile(filePath, 'utf-8'));
};

export default getObject;
