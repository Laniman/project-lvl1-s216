import _ from 'lodash';
import { run } from '..';

const makeProgressionTerms = (initialTerm, difference, progressionLength) => {
  const rec = (terms) => {
    if (terms.length === progressionLength) {
      return terms.slice().reverse();
    }

    const [head] = terms;
    return rec([head + difference, ...terms]);
  };

  return rec([initialTerm]);
};

const makeQuestion = (progression, missingTermIndex, missingTerm) =>
  progression
    .map((term, index) => (index === missingTermIndex ? missingTerm : term))
    .join(' ');


const generate = () => {
  const initialTerm = _.random(0, 10);
  const difference = _.random(0, 10);
  const progressionLength = 10;
  const missingTerm = '..';
  const missingTermIndex = _.random(0, progressionLength);

  const progression = makeProgressionTerms(initialTerm, difference, progressionLength);
  const question = makeQuestion(progression, missingTermIndex, missingTerm);
  const correct = String(progression[missingTermIndex]);

  return { question, correct };
};

const game = {
  generate,
  description: 'What number is missing in this progression?',
};

export default () => run(game);
