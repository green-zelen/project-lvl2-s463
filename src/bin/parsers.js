import * as fs from 'fs';
import * as yaml from 'js-yaml';

export function readJsonFile(filePath) {
  return JSON.parse(fs.readFileSync(filePath));
}

export function readYamlFile(filePath) {
  return yaml.safeLoad(fs.readFileSync(filePath));
}

export default readJsonFile;
