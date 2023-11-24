import yaml from 'js-yaml';

export default (rawData, extName) => {
  switch (extName) {
    case 'json':
      return JSON.parse(rawData);
    case 'yaml':
    case 'yml':
      return yaml.load(rawData);
    default:
      throw Error(`"${extName}" is unexpected file extension`);
  }
};
