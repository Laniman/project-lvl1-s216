import { generateInt } from '../utils';

const isEven = number => number % 2 === 0;

const generate = () => {
  const question = generateInt();
  const correct = isEven(question) ? 'yes' : 'no';
  return { question, correct };
};

export default {
  generate,
  description: 'Answer "yes" if number even otherwise answer "no".\n',
};
