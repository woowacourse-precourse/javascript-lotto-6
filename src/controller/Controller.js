import Lotto from '../model/lotto.js';
import UserLotto from '../model/UserLotto.js';
import Statistics from '../model/statistics.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { MESSAGE, CHARACTER } from '../constants/constants.js';

class controller {
  #inputView;
  #outputView;
  #userLotto;
  #winningLotto;
  #statistics;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#statistics = new Statistics();
  }

  async buyLotto() {
    const purchaseAmount = await this.#inputView.readPurchaseAmount();

    try {
      this.#userLotto = new UserLotto(Number(purchaseAmount));
      this.priintUserLottoNumbers();
      await this.setWinningLottoNumbers();
    } catch (error) {
      this.#outputView.print(error.message);
      this.buyLotto();
    }
  }

  priintUserLottoNumbers() {
    this.#outputView.print(
      `${this.#userLotto.getNumberOfPurchase()}개를 구매했습니다.`
    );
    this.#userLotto.getUserLottoNumbers().forEach((userLottoNumber) => {
      const message = userLottoNumber.getLottoNumber().join(`, `);
      this.#outputView.print(`[${message}]`);
    });
  }

  async setWinningLottoNumbers() {
    const lottoNumbers = await this.#inputView.readLottoNumber();

    try {
      this.#winningLotto = new Lotto(
        Array.from(lottoNumbers.split(','), Number)
      );
      await this.#setBonusNumber();
    } catch (error) {
      this.#outputView.print(error.message);
      this.setWinningLottoNumbers();
    }
  }

  async #setBonusNumber() {
    const bonusNumber = await this.#inputView.readBonusNumber();

    this.#winningLotto.setBonusNumber(Number(bonusNumber));
    this.calculateStatistics();
  }

  calculateStatistics() {
    this.#statistics.calculateStatistics(this.#userLotto, this.#winningLotto);
    this.printStatistics();
  }

  printStatistics() {
    this.#statistics.getStatistics().forEach((statistic) => {
      this.#outputView.print(
        `${MESSAGE[statistic.rank]}${statistic.count}${CHARACTER.countsuffix}`
      );
    });
    this.#outputView.print(
      `${CHARACTER.returnpreffix}${this.#statistics.getRateOfReturns()}${
        CHARACTER.returnsuffix}`
    );
  }
}

export default controller;
