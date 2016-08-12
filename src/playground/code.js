import _ from 'lodash';

let fn = () => {

  const squared = (n) => {
    return n * n;
  };

  const values = [1, 2, 4];

  return _.map(values, squared);

};

export default {
  fnToEvaluate: fn,
  compiledSource: fn.toString()
};
