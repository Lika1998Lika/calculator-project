import path from 'node:path';

export const buildFixturesPath = (filepath) => path.resolve('__fixtures__', filepath);
export const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
