import _ from 'lodash';

const mknode = (key, value, type, meta = {}) => ({
  key,
  value,
  type,
  meta,
});

export const buildTree = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const sortedKeys = _.sortBy(keys);
  const nodes = sortedKeys.map((key) => {
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return {
        key,
        type: 'nested',
        children: buildTree(obj1[key], obj2[key]),
      };
    }
    if (!_.has(obj1, key)) return mknode(key, obj2[key], 'added');
    if (!_.has(obj2, key)) return mknode(key, obj1[key], 'removed');
    if (obj1[key] !== obj2[key]) return mknode(key, obj2[key], 'updated', { oldValue: obj1[key] });

    return mknode(key, obj1[key], 'unchanged');
  });

  return nodes;
};
