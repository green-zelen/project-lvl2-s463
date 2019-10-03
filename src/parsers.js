import fs from 'fs';
import yaml from 'js-yaml';
import ini from 'ini';
import path from 'path';

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
