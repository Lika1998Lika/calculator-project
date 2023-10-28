import path from 'node:path';

export const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
