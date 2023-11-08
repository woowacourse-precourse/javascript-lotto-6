import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../../constants/message.js';
import SYMBOL from '../../constants/symbol.js';

class WinningStatisticsInfo {
  #lottoGenerator;
  #lotto;
  #bonus;

  constructor({ lottoGenerator, lotto, bonus }) {
    this.#lottoGenerator = lottoGenerator;
    this.#lotto = lotto;
    this.#bonus = bonus;
  }

  #printHeader() {
    return `${
      MESSAGE.winningStatistics +
      SYMBOL.blankDivider +
      SYMBOL.winningStatisticsDivision
    }`;
  }

  printInfoMessage() {
    Console.print(SYMBOL.blankDivider + this.#printHeader());
  }
}

export default WinningStatisticsInfo;
