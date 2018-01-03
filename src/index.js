import readlineSync from 'readline-sync';
import _ from 'lodash';

const correctAnswerNumber = 3;
const correctAnswerMessage = 'Correct!';
const answerMessage = 'Your answer: ';
const defaultDescriptionMessage = 'No description\n';

const makeQuestionMessage = question => `Question: ${question}`;
const makeTryAgainMessage = name => `Let's try again, ${name}!`;
const makeSuccessGameMessage = name => `Congratulations, ${name}!`;
const makeWrongMessage = (wrong, correct) => `'${wrong}' is wrong answer ;(. Correct answer was '${correct}'.`;
const print = console.log;
const welcome = () => print('Welcome to the Brain Games!');

export const greet = () => {
  const userName = readlineSync.question('May I have your name? ');
  print(`Hello, ${userName}!\n`);
  return userName;
};

export const run = (game) => {
  welcome();
  const { generate, description = defaultDescriptionMessage } = game;
  if (_.isUndefined(generate)) {
    print();
    greet();
    return;
  }

  print(description);
  const name = greet();

  const inner = (count) => {
    if (count === 0) {
      print(makeSuccessGameMessage(name));
      return;
    }

    const { question, correct } = generate();
    print(makeQuestionMessage(question));
    const answer = readlineSync.question(answerMessage);
    const isCorrectAnswer = answer === correct;
    if (!isCorrectAnswer) {
      print(makeWrongMessage(answer, correct));
      print(makeTryAgainMessage(name));
      return;
    }
    print(correctAnswerMessage);
    inner(count - 1);
  };

  inner(correctAnswerNumber);
};
