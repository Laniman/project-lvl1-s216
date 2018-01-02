import _ from 'lodash';

export const generatePositiveInt = () => _.random(0, 100);

export const generateSign = (signObj) => {
  const signs = Object.keys(signObj);
  const index = _.random(0, signs.length - 1);
  return signs[index];
};

export const generateInt = () => _.random(-100, 100);
