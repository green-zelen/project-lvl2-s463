import * as fs from 'fs';

export function readJsonFile(filePath) {
  return JSON.parse(fs.readFileSync(filePath));
}

export default readJsonFile;
