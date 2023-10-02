import { readFileSync } from 'node:fs';
import path from 'node:path';
import _ from 'lodash';    

const parseFile = (filepath) => {
    const extname = path.extname(filepath);
    if(extname !== '.json') {
        return;
    }
    const content = readFileSync(path.resolve(filepath), 'utf-8');
    return JSON.parse(content);
}
// {
//     - follow: false
//       host: hexlet.io
//     - proxy: 123.234.53.22
//     - timeout: 50
//     + timeout: 20
//     + verbose: true
//   }

// [
//     {key: 'follow', status: 'deleted'},
//     {key: 'host', status: 'unchanged'},
//     {key: 'proxy', status: 'deleted'},
//     {key: 'timeout', status: 'changed'},
//     {key: 'verbose', status: 'added'},
// ]
    
const buildAst = (obj1, obj2) => {
    const keys = Object.keys(obj1, obj2);
    const sharedKeys = _.union(keys);
    const result = [];

    for(const key of sharedKeys) {
        if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
            result.push({key: key, status: 'deleted'}); 
        }
        if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
            result.push({key: key, status: 'added'}); 
        }
        if (Object.hasOwn(obj2, key) && Object.hasOwn(obj2, key)) {
            if (obj1[key] === obj2[key]) {
              result.push({key: key, status: 'unchanged'}); 
            }
            if (obj1[key] !== obj2[key]) {
              result.push({key: key, status: 'changed'});
        }
    }
   }
    return result;
}
const genDiff = (filepath1, filepath2) => {
    const obj1 = parseFile(filepath1);
    const obj2 = parseFile(filepath2)
    const tree = buildAst(obj1, obj2);
   return tree;
};

console.log(genDiff('file1.json', 'file2.json'))
export default genDiff;