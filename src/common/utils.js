import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR } from './constants.js';

const printMessage = (message) => Console.print(message);

const readLineAsync = async (message) => (await Console.readLineAsync(message)).trim()

const throwError = (message) => {
  throw new Error(`${ERROR.header} ${message}`);
};

const generateRandomNumber = (min, max, count) => Random.pickUniqueNumbersInRange(min, max, count);

export { printMessage, readLineAsync, throwError, generateRandomNumber };
