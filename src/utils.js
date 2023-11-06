import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_NUMBERS, INPUT_MESSAGE, WINNER_MESSAGE } from './constants.js';

function inputLottoNum() {
  return MissionUtils.Console.readLineAsync(INPUT_MESSAGE.PURCHASE_MESSAGE);
}

function parchasedLotto(n) {
  return MissionUtils.Console.print(INPUT_MESSAGE.PURCHASED_MESSAGE(n));
}

function readLineLottoCount() {
  return MissionUtils.Console.readLineAsync(INPUT_MESSAGE.LOTTO_NUMBER);
}

function consoleWinner() {
  return MissionUtils.Console.print(WINNER_MESSAGE.WINLOG);
}
function consoleError(error) {
  return error;
}

function winCount(count) {
  return MissionUtils.Console.print(WINNER_MESSAGE.WINCOUNT(count));
}

function resultProfit(number) {
  return MissionUtils.Console.print(WINNER_MESSAGE.PROFIT(number));
}

function randomNum() {
  return MissionUtils.Random.pickUniqueNumbersInRange(
    LOTTO_NUMBERS.MIN_RANGE,
    LOTTO_NUMBERS.MAX_RANGE,
    LOTTO_NUMBERS.NUMBER_SIZE,
  );
}

export {
  inputLottoNum,
  parchasedLotto,
  readLineLottoCount,
  consoleWinner,
  consoleError,
  winCount,
  resultProfit,
  randomNum,
};
