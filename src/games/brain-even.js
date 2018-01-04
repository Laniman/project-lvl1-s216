import { generateInt } from '../utils';
import { run } from '..';

const isEven = number => number % 2 === 0;

const generate = () => {
  const question = generateInt();
  const correct = isEven(question) ? 'yes' : 'no';
  return { question, correct };
};

const game = {
  generate,
  description: 'Answer "yes" if number even otherwise answer "no".',
};

export default () => run(game);
