import { run } from '..';

const generate = () => {
  const question = 1;
  const correct = String(1);

  return { question, correct };
};

const game = {
  generate,
  description: 'Balance the given number.\n',
};

export default () => run(game);
