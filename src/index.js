/* eslint-disable consistent-return */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import _ from 'lodash';
import { buildFixturesPath } from './utils.js';
import { parse } from './parser.js';

const parseFile = (filepath) => {
  const extname = path.extname(filepath);
  const content = readFileSync(buildFixturesPath(filepath), 'utf-8');
  return parse(content, extname);
};

const buildAst = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2).sort();
  const result = keys.map((key) => {
    if (!Object.hasOwn(obj1, key)) {
      return { key, value: obj2[key], status: 'added' };
    } if (!Object.hasOwn(obj2, key)) {
      return { key, value: obj1[key], status: 'deleted' };
    } if (obj1[key] !== obj2[key]) {
      return {
        key, value: obj2[key], oldValue: obj1[key], status: 'changed',
      };
    }
    return { key, value: obj1[key], status: 'unchanged' };
  });
  return result;
};

const genDiff = (filepath1, filepath2) => {
  const obj1 = parseFile(filepath1);
  const obj2 = parseFile(filepath2);
  const tree = buildAst(obj1, obj2);
  const nodes = tree.map((node) => {
    switch (node.status) {
      case 'deleted':
        return `  - ${node.key}: ${node.value}`;
      case 'unchanged':
        return `    ${node.key}: ${node.value}`;
      case 'added':
        return `  + ${node.key}: ${node.value}`;
      case 'changed':
        return `  - ${node.key}: ${node.oldValue}\n  + ${node.key}: ${node.value}`;
      default:
        return node;
    }
  });
  return `{\n${nodes.join('\n')}\n}`;
};

// console.log(genDiff('file1.json', 'file2.json'));
console.log(genDiff('file1.json', 'file2.yml'));

export default genDiff;
