import Print from '../Print.js';
import Store from '../Store.js';

class OutputView {
  static outputLottoNumbers(user) {
    user.purchaseLottos();
    const lottos = user.getLottos();
    Print.printNPurchasePhrase(lottos.length).printLottosNumbers(lottos).print();
  }

  static outputResults(user, winning) {
    const store = OutputView.#match(user, winning);
    Print.printWinningStatistics(store.getMatchResults()).printTotalReturn(store.getTotalReturn());
  }

  static #match(user, winning) {
    const store = new Store(user.getpurchaseAmount());

    user.getLottos().forEach((lotto) => {
      store.storeMatchResult(winning.match(lotto));
    });
    return store;
  }
}

export default OutputView;
