import stylish from './stylish.js';

const format = (data, formatStyle) => {
  switch (formatStyle) {
    case 'stylish':
      return stylish(data);
    default:
      throw new Error('Unknown output format');
  }
};

export default format;
