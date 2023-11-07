import Store from '../model/Store.js';
import OutputView from '../view/OutputView.js';

class StoreController {
  #store;

  createStore(user, winning) {
    this.#store = new Store(user.getpurchaseAmount());
    this.#storeMatchResults(user, winning);
    return this;
  }

  getStoreObject() {
    return this.#store;
  }

  printMatchResults() {
    OutputView.outputResults(this.#store);
    return this;
  }

  #storeMatchResults(user, winning) {
    user.getLottos().forEach((lotto) => {
      this.#store.storeMatchResult(winning.matchLottoNumbers(lotto.getNumbers()));
    });
  }
}

export default StoreController;
