import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../../constants/message.js';
import SYMBOL from '../../constants/symbol.js';
import WinnerSelector from '../WinnerSelector.js';

class WinningStatisticsInfo {
  #lottoGenerator;
  #lottoNumbers;
  #bonusNumber;
  #winningCount;

  constructor({ lottoGenerator, lottoNumbers, bonusNumber }) {
    this.#lottoGenerator = lottoGenerator;
    this.#lottoNumbers = lottoNumbers;
    this.#bonusNumber = bonusNumber;
  }

  #printHeader() {
    return `${
      MESSAGE.winningStatistics +
      SYMBOL.blankDivider +
      SYMBOL.winningStatisticsDivision
    }`;
  }

  #getWinningCount() {
    const winnerSelector = new WinnerSelector({
      lottoNumbers: this.#lottoNumbers,
      bonusNumber: this.#bonusNumber,
      issuedLottos: this.#lottoGenerator.getLottos(),
    });
    this.#winningCount = winnerSelector.getResult();
  }

  printInfoMessage() {
    Console.print(SYMBOL.blankDivider + this.#printHeader());
    this.#getWinningCount();
    Console.print(this.#winningCount);
  }
}

export default WinningStatisticsInfo;
