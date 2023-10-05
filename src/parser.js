import yaml from 'js-yaml';

export const parse = (rawData, extname) => {
  switch (extname) {
    case '.json':
      return JSON.parse(rawData);
    case '.yaml':
    case '.yml':
      return yaml.load(rawData);
    default:
      throw Error('unexpected extname');
  }
};
