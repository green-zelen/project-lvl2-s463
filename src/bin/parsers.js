import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';


export const getParser = (filePath) => {
  let parseFile; // may be undefined
  const ext = path.extname(filePath);
  switch (ext) {
    case '.json':
      parseFile = JSON.parse;
      break;
    case '.yml':
      parseFile = yaml.safeLoad;
      break;

    default:
      console.log(`[ERROR] can't get parser for extname: ${ext}`);
      break;
  }
  return parseFile;
};

export const readFile = (filePath) => {
  const parser = getParser(filePath);
  return parser(fs.readFileSync(filePath));
};

export default readFile;
