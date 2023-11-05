import { MissionUtils } from '@woowacourse/mission-utils';
import {
  LOTTO_NUMBERS,
  GRADING_COUNT,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  WINNER_MESSAGE,
} from './constants.js';

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

function winCount(count) {
  return MissionUtils.Console.print(WINNER_MESSAGE.WINCOUNT(count));
}

function resultProfit(number) {
  return MissionUtils.Console.print(WINNER_MESSAGE.PROFIT(number));
}

function randomNum() {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
}

export {
  inputLottoNum,
  parchasedLotto,
  readLineLottoCount,
  consoleWinner,
  winCount,
  resultProfit,
  randomNum,
};
