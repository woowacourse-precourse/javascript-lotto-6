import print from '../utils/print';
import PRINT_PHRASE from '../constants/print';

class OutputView {
  static outputLottosNumbers(lottos) {
    OutputView.#printNPurchasePhrase(lottos.length).#printLottosNumbers(lottos);
    print();
  }

  static outputResults(store) {
    OutputView.#printWinningStatistics(store.getMatchResults()).#printTotalReturn(
      store.getTotalReturn(),
    );
  }

  static #printNPurchasePhrase(n) {
    print(`${n}${PRINT_PHRASE.purchasePhrase}`);
    return this;
  }

  static #printLottosNumbers(lottos) {
    lottos.forEach((lotto) => {
      print(`[${OutputView.#sortLottoNumbers(lotto)}]`);
    });

    return this;
  }

  static #sortLottoNumbers(lotto) {
    return [...lotto.getNumbers()].sort((a, b) => a - b).join(', ');
  }

  static #printWinningStatistics(matchResults) {
    const { winningStatisticsPhase, contour } = PRINT_PHRASE;
    print(winningStatisticsPhase);
    print(contour);

    matchResults.forEach(({ matchString, money, count }) => {
      print(`${matchString} (${OutputView.#formatCurrency(money)}) - ${count}개`);
    });

    return this;
  }

  static #formatCurrency(money) {
    return `${money.toLocaleString('en-US')}원`;
  }

  static #printTotalReturn(totalReturn) {
    const { totalReturnStartPhrase, totalReturnEndPhrase } = PRINT_PHRASE;
    print(`${totalReturnStartPhrase} ${totalReturn}${totalReturnEndPhrase}`);

    return this;
  }
}

export default OutputView;
