import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from './src/parser.js';
import { buildTree } from './src/buildTree.js';
import format from './src/formatters/index.js';

export const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const parseData = (filepath) => {
  const extname = path.extname(filepath);
  const transformedExtname = extname.slice(1);
  const content = readFileSync(getFullPath(filepath), 'utf-8');
  return parse(content, transformedExtname);
};

const genDiff = (filepath1, filepath2, formatStyle = 'stylish') => {
  const obj1 = parseData(filepath1);
  const obj2 = parseData(filepath2);
  const tree = buildTree(obj1, obj2);
  return format(tree, formatStyle);
};

export default genDiff;
