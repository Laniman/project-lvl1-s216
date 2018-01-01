import readlineSync from 'readline-sync';
import _ from 'lodash';
import hello from './';

const CORRECT_ANSWER_NUMBER = 3;
const CORRECT_ANSWER_MESSAGE = 'Correct!';
const ANSWER_MESSAGE = 'Your answer: ';

const makeQuestionMessage = question => `Question: ${question}`;
const makeTryAgainMessage = name => `Let's try again, ${name}!`;
const makeSuccessGameMessage = name => `Congratulations, ${name}!`;
const makeWrongMessage = (wrong, correct) => `'${wrong}' is wrong answer ;(. Correct answer was '${correct}'.`;
const isEven = number => number % 2 === 0;
const print = console.log;

export default () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = hello();
  console.log();
  const inner = (count) => {
    if (count === 0) {
      print(makeSuccessGameMessage(name));
      return;
    }

    const question = _.random(-100, 100);
    print(makeQuestionMessage(question));
    const answer = readlineSync.question(ANSWER_MESSAGE);
    const correct = isEven(question) ? 'yes' : 'no';
    const isCorrectAnswer = answer === correct;
    if (!isCorrectAnswer) {
      print(makeWrongMessage(answer, correct));
      print(makeTryAgainMessage(name));
      return;
    }
    print(CORRECT_ANSWER_MESSAGE);
    inner(count - 1);
  };
  return inner(CORRECT_ANSWER_NUMBER);
};
