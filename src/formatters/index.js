/* eslint-disable consistent-return */
import stylish from './stylish.js';
import plain from './plain.js';

const format = (data, formatStyle) => {
  switch (formatStyle) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    default:
      console.log('Unknown output format');
  }
};

export default format;
