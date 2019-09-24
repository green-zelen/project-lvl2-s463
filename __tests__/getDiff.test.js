import * as fs from 'fs';
import { getSortedAst } from '../src/genDiff';
import { getObject } from '../src/parsers';
import renderDiff from '../src/__formatters__/renderDiff';
import renderPlain from '../src/__formatters__/renderPlain';
import renderJson from '../src/__formatters__/renderJson';

const jsonBefore1 = getObject(`${__dirname}/__fixtures__/1before.json`);
const jsonAfter1 = getObject(`${__dirname}/__fixtures__/1after.json`);

const yamlBefore2 = getObject(`${__dirname}/__fixtures__/2before.yml`);
const yamlAfter2 = getObject(`${__dirname}/__fixtures__/2after.yml`);

const iniBefore3 = getObject(`${__dirname}/__fixtures__/3before.ini`);
const iniAfter3 = getObject(`${__dirname}/__fixtures__/3after.ini`);

const jsonBefore4 = getObject(`${__dirname}/__fixtures__/4before.json`);
const jsonAfter4 = getObject(`${__dirname}/__fixtures__/4after.json`);

const yamlBefore5 = getObject(`${__dirname}/__fixtures__/5before.yml`);
const yamlAfter5 = getObject(`${__dirname}/__fixtures__/5after.yml`);

const iniBefore6 = getObject(`${__dirname}/__fixtures__/6before.ini`);
const iniAfter6 = getObject(`${__dirname}/__fixtures__/6after.ini`);

test('compare two jsons/diff', () => {
  expect(renderDiff(getSortedAst(jsonBefore1, jsonAfter1))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/1expect.txt`, 'utf-8'));
});

test('compare two jsons/plain', () => {
  expect(renderPlain(getSortedAst(jsonBefore1, jsonAfter1))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/1expectPlain.txt`, 'utf-8'));
});

test('compare two jsons/json', () => {
  expect(renderJson(getSortedAst(jsonBefore1, jsonAfter1))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/1expect.json`, 'utf-8'));
});

test('compare two yamls/diff', () => {
  expect(renderDiff(getSortedAst(yamlBefore2, yamlAfter2))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/2expect.txt`, 'utf-8'));
});

test('compare two yamls/plain', () => {
  expect(renderPlain(getSortedAst(yamlBefore2, yamlAfter2))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/2expectPlain.txt`, 'utf-8'));
});

test('compare two yamls/json', () => {
  expect(renderJson(getSortedAst(yamlBefore2, yamlAfter2))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/2expect.json`, 'utf-8'));
});

test('compare two inies/diff', () => {
  expect(renderDiff(getSortedAst(iniBefore3, iniAfter3))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/3expect.txt`, 'utf-8'));
});

test('compare two inies/plain', () => {
  expect(renderPlain(getSortedAst(iniBefore3, iniAfter3))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/3expectPlain.txt`, 'utf-8'));
});

test('compare two inies/json', () => {
  expect(renderJson(getSortedAst(iniBefore3, iniAfter3))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/3expect.json`, 'utf-8'));
});

test('compare two inline jsons/diff', () => {
  expect(renderDiff(getSortedAst(jsonBefore4, jsonAfter4))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/4expect.txt`, 'utf-8'));
});

test('compare two inline jsons/plain', () => {
  expect(renderPlain(getSortedAst(jsonBefore4, jsonAfter4))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/4expectPlain.txt`, 'utf-8'));
});

test('compare two inline jsons/json', () => {
  expect(renderJson(getSortedAst(jsonBefore4, jsonAfter4))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/4expect.json`, 'utf-8'));
});

test('compare two inline  yamls/diff', () => {
  expect(renderDiff(getSortedAst(yamlBefore5, yamlAfter5))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/5expect.txt`, 'utf-8'));
});

test('compare two inline  yamls/plain', () => {
  expect(renderPlain(getSortedAst(yamlBefore5, yamlAfter5))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/5expectPlain.txt`, 'utf-8'));
});

test('compare two inline  yamls/json', () => {
  expect(renderJson(getSortedAst(yamlBefore5, yamlAfter5))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/5expect.json`, 'utf-8'));
});

test('compare two inline inies/diff', () => {
  expect(renderDiff(getSortedAst(iniBefore6, iniAfter6))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/6expect.txt`, 'utf-8'));
});

test('compare two inline inies/plain', () => {
  expect(renderPlain(getSortedAst(iniBefore6, iniAfter6))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/6expectPlain.txt`, 'utf-8'));
});

test('compare two inline inies/json', () => {
  expect(renderJson(getSortedAst(iniBefore6, iniAfter6))).toBe(fs.readFileSync(`${__dirname}/__fixtures__/6expect.json`, 'utf-8'));
});
