import readlineSync from 'readline-sync';

const CORRECT_ANSWER_NUMBER = 3;
const CORRECT_ANSWER_MESSAGE = 'Correct!';
const ANSWER_MESSAGE = 'Your answer: ';

const makeQuestionMessage = question => `Question: ${question}`;
const makeTryAgainMessage = name => `Let's try again, ${name}!`;
const makeSuccessGameMessage = name => `Congratulations, ${name}!`;
const makeWrongMessage = (wrong, correct) => `'${wrong}' is wrong answer ;(. Correct answer was '${correct}'.`;
const print = console.log;
const welcome = () => print('Welcome to the Brain Games!');
const getDescription = game => game.description;
const getGenerator = game => game.generate;
const isGame = game => game.generate && typeof game.generate === 'function';

export const greet = () => {
  const userName = readlineSync.question('May I have your name? ');
  print(`Hello, ${userName}!\n`);
  return userName;
};

export const run = (game) => {
  welcome();
  if (!isGame(game)) {
    print();
    greet();
    return;
  }

  const generate = getGenerator(game);
  const description = getDescription(game);
  print(description);
  const name = greet();

  const inner = (count) => {
    if (count === 0) {
      print(makeSuccessGameMessage(name));
      return;
    }

    const { question, correct } = generate();
    print(makeQuestionMessage(question));
    const answer = readlineSync.question(ANSWER_MESSAGE);
    const isCorrectAnswer = answer === correct;
    if (!isCorrectAnswer) {
      print(makeWrongMessage(answer, correct));
      print(makeTryAgainMessage(name));
      return;
    }
    print(CORRECT_ANSWER_MESSAGE);
    inner(count - 1);
  };

  inner(CORRECT_ANSWER_NUMBER);
};
