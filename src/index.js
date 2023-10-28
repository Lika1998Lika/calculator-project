import { readFileSync } from 'node:fs';
import path from 'node:path';
import { buildFixturesPath } from './utils.js';
import { parse } from './parser.js';
import { buildTree } from './buildTree.js';
import format from './formatters/index.js';

const parseData = (filepath) => {
  const extname = path.extname(filepath);
  const content = readFileSync(buildFixturesPath(filepath), 'utf-8');
  return parse(content, extname);
};

const genDiff = (filepath1, filepath2, formatStyle = 'stylish') => {
  const obj1 = parseData(filepath1);
  const obj2 = parseData(filepath2);
  const tree = buildTree(obj1, obj2);
  return format(tree, formatStyle);
};

export default genDiff;
