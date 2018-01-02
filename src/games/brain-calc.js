import { generatePositiveInt, generateSign } from '../utils';

const sign = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generate = () => {
  const number1 = generatePositiveInt();
  const number2 = generatePositiveInt();
  const randomSign = generateSign(sign);

  const question = `${number1} ${randomSign} ${number2}`;
  const result = sign[randomSign](number1, number2);
  const correct = String(result);

  return { question, correct };
};

export default {
  generate,
  description: 'What is the result of the expression?\n',
};
