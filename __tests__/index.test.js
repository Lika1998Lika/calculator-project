import fs from 'node:fs'
import genDiff from "../src";
import { buildFixturesPath } from '../src/utils';
import { expect } from '@jest/globals';
const result = fs.readFileSync(buildFixturesPath('result.txt'), 'utf-8')

test('diff', () => {
    expect(genDiff('file1.json', 'file2.json')).toBe(result)
})
