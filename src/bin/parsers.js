import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as ini from 'ini';
import * as path from 'path';


export const getParser = (ext) => {
  let parseFile; // may be undefined
  switch (ext) {
    case '.json':
      parseFile = JSON.parse;
      break;
    case '.yml':
      parseFile = yaml.safeLoad;
      break;
    case '.ini':
      parseFile = ini.parse;
      break;

    default:
      console.log(`[ERROR] can't get parser for extname: ${ext}`);
      break;
  }
  return parseFile;
};

export const getExtention = filePath => path.extname(filePath);

export const readFile = (filePath) => {
  const parser = getParser(getExtention(filePath));
  return parser(fs.readFileSync(filePath, 'utf-8'));
};

export default readFile;
