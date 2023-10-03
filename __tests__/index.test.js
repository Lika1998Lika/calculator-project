import fs from 'node:fs';
import { expect, test } from '@jest/globals';
import genDiff from '../src';
import { buildFixturesPath } from '../src/utils';

const result = fs.readFileSync(buildFixturesPath('result.txt'), 'utf-8');

test('diff', () => {
  expect(genDiff('file1.json', 'file2.json')).toBe(result);
});
