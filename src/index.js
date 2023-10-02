import { readFileSync } from 'node:fs';
import path from 'node:path';

const parseFile = (filepath) => {
    const extname = path.extname(filepath);
    if(extname !== '.json') {
        return;
    }
    const content = readFileSync(path.resolve(filepath), 'utf-8');
    return JSON.parse(content);
}

const gendiff = (filepath1, filepath2) => {
    const obj1 = parseFile(filepath1);
    const obj2 = parseFile(filepath2)

    return {obj1, obj2};
}

console.log(gendiff('file1.json', 'file2.json'))
export default gendiff;