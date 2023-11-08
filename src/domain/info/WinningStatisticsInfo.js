import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../../constants/message.js';
import SYMBOL from '../../constants/symbol.js';
import WinnerSelector from '../WinnerSelector.js';
import convertWinningAmount from '../utils/convertWinningAmount.js';
import NUMBER from '../../constants/number.js';

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

  #printWinningResult(winningCount, idx) {
    const winPlace = NUMBER.winningAmount;
    return [
      `3개 일치 ${convertWinningAmount(winPlace.fifth)} - ${
        winningCount[idx]
      }개`,
      `4개 일치 ${convertWinningAmount(winPlace.fourth)} - ${
        winningCount[idx]
      }개`,
      `5개 일치 ${convertWinningAmount(winPlace.third)} - ${
        winningCount[idx]
      }개`,
      `5개 일치, 보너스 볼 일치 ${convertWinningAmount(winPlace.second)} - ${
        winningCount[idx]
      }개`,
      `6개 일치 ${convertWinningAmount(winPlace.first)} - ${
        winningCount[idx]
      }개`,
    ];
  }

  printInfoMessage() {
    Console.print(SYMBOL.blankDivider + this.#printHeader());

    this.#getWinningCount();

    for (let idx = 0; idx < this.#winningCount.length; idx++) {
      Console.print(this.#printWinningResult(this.#winningCount, idx)[idx]);
    }
  }
}

export default WinningStatisticsInfo;
