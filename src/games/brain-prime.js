import { run } from '..';

const generate = () => {
  const question = '';
  const correct = '';
  return { question, correct };
};

const game = {
  generate,
  description: 'Is this number prime?\n',
};

export default () => run(game);
