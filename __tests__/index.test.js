/* eslint-disable no-undef */
import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '..';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const stylishResult = readFile('stylish.expected.txt');
const plainResult = readFile('plain.expected.txt');
const jsonResult = readFile('json.expected.txt');

const file1json = getFixturePath('file1.json');
const file2json = getFixturePath('file2.json');
const file1yaml = getFixturePath('file1.yml');
const file2yml = getFixturePath('file2.yml');

test.each([
  [file1json, file2json, stylishResult],
  [file1yaml, file2yml, stylishResult],
  [file1json, file2yml, stylishResult],
])('Stylish', (file1, file2, expected) => {
  expect(genDiff(file1, file2, 'stylish')).toBe(expected);
});

test.each([
  [file1json, file2json, plainResult],
  [file1yaml, file2yml, plainResult],
  [file1json, file2yml, plainResult],
])('Plain', (file1, file2, expected) => {
  expect(genDiff(file1, file2, 'plain')).toBe(expected);
});

test.each([
  [file1json, file2json, jsonResult],
  [file1yaml, file2yml, jsonResult],
  [file1json, file2yml, jsonResult],
])('Plain', (file1, file2, expected) => {
  expect(genDiff(file1, file2, 'json')).toBe(expected);
});
