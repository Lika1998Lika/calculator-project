import fs from 'node:fs';
import { describe, expect, test } from '@jest/globals';
import genDiff from '../src';
import { buildFixturesPath } from '../src/utils';

const result = fs.readFileSync(buildFixturesPath('result.txt'), 'utf-8');

describe('diff nested files --stylish', () => {
  test('json files', () => {
    expect(genDiff('file1.json', 'file2.json')).toBe(result);
  });

  test('yaml files', () => {
    expect(genDiff('file1.yml', 'file2.yml'));
  });
});
