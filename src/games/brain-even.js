import _ from 'lodash';

const isEven = number => number % 2 === 0;

const generate = () => {
  const question = _.random(-100, 100);
  const correct = isEven(question) ? 'yes' : 'no';
  return { question, correct };
};

export default {
  generate,
  description: 'Answer "yes" if number even otherwise answer "no".\n',
};
