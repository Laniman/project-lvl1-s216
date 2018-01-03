import { run } from '..';
import { generateInt } from '../utils';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const rec = (i) => {
    if (i === num) {
      return true;
    }
    return num % i === 0 ? false : rec(i + 1);
  };

  return rec(2);
};

const generate = () => {
  const number = generateInt();
  const question = number;
  const correct = isPrime(number) ? 'yes' : 'no';
  return { question, correct };
};

const game = {
  generate,
  description: 'Is this number prime?\n',
};

export default () => run(game);
