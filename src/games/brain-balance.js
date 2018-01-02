import _ from 'lodash';
import { run } from '..';

const isBalanced = (ds) => {
  if (ds.length === 1) {
    return true;
  }
  const minDigit = _.min(ds);
  const maxDigit = _.max(ds);
  return Math.abs(maxDigit - minDigit) < 2;
};

const balance = (number) => {
  const digits = number.toString().split('').map(Number);
  const rec = (ds) => {
    if (isBalanced(ds)) {
      return ds.sort().join('');
    }

    const minDigitIndex = _.indexOf(ds, _.min(ds));
    const maxDigitIndex = _.indexOf(ds, _.max(ds));

    const nextDs = ds.slice();
    nextDs[minDigitIndex] += 1;
    nextDs[maxDigitIndex] -= 1;

    return rec(nextDs);
  };

  return rec(digits);
};

const generate = () => {
  const question = _.random(0, 9999);
  const correct = balance(question);

  return { question, correct };
};

const game = {
  generate,
  description: 'Balance the given number.\n',
};

export default () => run(game);
