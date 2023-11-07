import { Console } from '@woowacourse/mission-utils';
import { LOTTO_REWARDS_BY_RANK, MESSAGES, RANK_MESSAGES } from '../constants/lotto.js';

class OutputView {
  #print;

  constructor(print = Console.print) {
    this.#print = print;
  }

  #printBlankLine() {
    this.#print('');
  }

  printErrorMessage(errorMessage) {
    this.#print(errorMessage);
  }

  #printLottoReturnRate(returnRate) {
    this.#print(MESSAGES.lottoReturnRate(returnRate));
  }

  #printLottoWinningResult(winningResult) {
    const winningRanks = Object.keys(winningResult);

    winningRanks.forEach((rank) => {
      this.#print(
        `${RANK_MESSAGES[rank]} (${LOTTO_REWARDS_BY_RANK[rank].toLocaleString()}원) - ${
          winningResult[rank]
        }개`,
      );
    });
  }

  printTotalLottoNumbers(lottoInfos) {
    const lottoCount = lottoInfos.length;

    this.#printBlankLine();
    this.#print(MESSAGES.lottoCount(lottoCount));
    lottoInfos.forEach((info) => {
      this.#print(info);
    });
    this.#printBlankLine();
  }

  printLottoResult(winningResult, returnRate) {
    this.#printBlankLine();
    this.#print(MESSAGES.winningStatistics);
    this.#print(MESSAGES.horizonSeperator);
    this.#printLottoWinningResult(winningResult);
    this.#printLottoReturnRate(returnRate);
  }
}

export default OutputView;
