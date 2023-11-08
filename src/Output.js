import { Console, Random } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE, CONSTANT_NUMBERS } from './constants.js';

class UserOutput {
  // 구입한 로또 개수 출력
  static printNumberOfLotto(numberOfLottoPurchased) {
    Console.print(
      CONSOLE_MESSAGE.NEW_LINE +
        numberOfLottoPurchased +
        CONSOLE_MESSAGE.PURCHASE_COUNT
    );
  }

  // 당첨 통계 출력
  static printStatistics(winningCountsDictionary) {
    Console.print(CONSOLE_MESSAGE.RESULT_STATISTICS);
    for (const key in winningCountsDictionary) {
      const prize = CONSOLE_MESSAGE[`CORRECT_${key.toUpperCase()}`];
      const count = winningCountsDictionary[key];
      Console.print(`${prize}${count}${CONSOLE_MESSAGE.COUNT}`);
    }
  }

  // 수익률 출력
  static printRateToReturn(rate) {
    Console.print(
      CONSOLE_MESSAGE.TOTAL_PROFIT_IS + rate + CONSOLE_MESSAGE.PERCENT
    );
  }
}

export default UserOutput;
