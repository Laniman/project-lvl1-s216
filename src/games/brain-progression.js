import { run } from '..';

const logic = () => {};

const generate = () => {
  const question = '';
  const result = logic();
  const correct = String(result);

  return { question, correct };
};

const game = {
  generate,
  description: 'What number is missing in this progression?\n',
};

export default () => run(game);
