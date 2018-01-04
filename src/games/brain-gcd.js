import { generatePositiveInt } from '../utils';
import { run } from '..';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const generate = () => {
  const number1 = generatePositiveInt();
  const number2 = generatePositiveInt();

  const question = `${number1} ${number2}`;
  const result = gcd(number1, number2);
  const correct = String(result);

  return { question, correct };
};

const game = {
  generate,
  description: 'Find the greatest common divisor of given numbers.',
};

export default () => run(game);
