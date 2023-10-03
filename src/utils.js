import path from 'node:path';

export const buildFixturesPath = (filepath) => path.resolve('__fixtures__', filepath);