import { MissionUtils } from '@woowacourse/mission-utils';
import PRINT_PHRASE from './constants/print.js';

class Print {
  static print(printString = '') {
    MissionUtils.Console.print(printString);

    return this;
  }

  static printInputPurchaseAmountPhrase() {
    Print.print(PRINT_PHRASE.inputPurchaseAmountPhrase);

    return this;
  }

  static printInputWinnigNumbersPhrase() {
    Print.print(PRINT_PHRASE.inputWinningNumberPhrase);

    return this;
  }

  static printInputBonusNumberPhrase() {
    Print.print(PRINT_PHRASE.inputBonusNumberPhrase);

    return this;
  }

  static printNPurchasePhrase(n) {
    Print.print(`${n}${PRINT_PHRASE.purchasePhrase}`);

    return this;
  }

  static printLottosNumbers(lottos) {
    lottos.forEach((lotto) => {
      Print.print(`[${Print.#sortLottoNumbers(lotto)}]`);
    });

    return this;
  }

  static printWinningStatistics(matchResults) {
    const { winningStatisticsPhase, contour } = PRINT_PHRASE;
    Print.print(winningStatisticsPhase);
    Print.print(contour);

    matchResults.forEach(({ matchString, money, count }) => {
      Print.print(`${matchString} (${Print.#formatCurrency(money)}) - ${count}개`);
    });

    return this;
  }

  static printTotalReturn(totalReturn) {
    const { totalReturnStartPhrase, totalReturnEndPhrase } = PRINT_PHRASE;
    Print.print(`${totalReturnStartPhrase} ${totalReturn}${totalReturnEndPhrase}`);

    return this;
  }

  static #formatCurrency(money) {
    return `${money.toLocaleString('en-US')}원`;
  }

  static #sortLottoNumbers(lotto) {
    return [...lotto.getNumbers()].sort((a, b) => a - b).join(', ');
  }
}

export default Print;
