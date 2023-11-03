import { MissionUtils, Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, LOTTO } from './constants.js';

function printMessage(message) {
  return Console.print(message);
}

async function readLineAsync(message) {
  return (await Console.readLineAsync(message)).trim();
}

function generateLotteryNumber() {
  return MissionUtils.Random.pickUniqueNumbersInRange(
    LOTTO.min_number,
    LOTTO.max_number,
    LOTTO.length,
  ).sort((a, b) => a - b);
}

function throwError(message, condition = true) {
  if (!condition) {
    return;
  }

  throw new Error(`${ERROR_MESSAGE.header} ${message}`);
}

export { printMessage, readLineAsync, generateLotteryNumber, throwError };
