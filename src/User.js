import { Console } from '@woowacourse/mission-utils';

const readInput = (message) => {
  return Console.readLineAsync(message);
};

const printMessage = (message) => {
  Console.print(message);
};

export default { readInput, printMessage };
