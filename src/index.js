import { readFileSync } from 'node:fs';
import path from 'node:path';
import { buildFixturesPath } from './utils.js';
import { parse } from './parser.js';
import { buildTree } from './buildTree.js';
import format from './formatters/index.js';

const parseFile = (filepath) => {
  const extname = path.extname(filepath);
  const content = readFileSync(buildFixturesPath(filepath), 'utf-8');
  return parse(content, extname);
};

const genDiff = (filepath1, filepath2, formatStyle) => {
  const obj1 = parseFile(filepath1);
  const obj2 = parseFile(filepath2);
  const tree = buildTree(obj1, obj2);
  return format(tree, formatStyle);
};

export default genDiff;
