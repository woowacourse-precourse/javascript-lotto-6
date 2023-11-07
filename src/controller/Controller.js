import WinningLotto from '../model/WinningLotto.js';
import UserLotto from '../model/UserLotto.js';
import Statistics from '../model/Statistics.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class Controller {
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
    try {
      const purchaseAmount = await this.#inputView.readPurchaseAmount();

      this.#userLotto = new UserLotto(Number(purchaseAmount));
      this.priintUserLottoNumbers();
      await this.setWinningLottoNumbers();
    } catch (error) {
      this.#outputView.print(error.message);
      this.buyLotto();
    }
  }

  priintUserLottoNumbers() {
    this.#outputView.printNumberOfPurchase(
      this.#userLotto.getNumberOfPurchase()
    );

    this.#userLotto.getUserLottoNumbers().forEach((userLottoNumber) => {
      const lottoNumberForPrint = userLottoNumber
        .getUserLottoNumber()
        .join(`, `);
      this.#outputView.print(`[${lottoNumberForPrint}]`);
    });
  }

  async setWinningLottoNumbers() {
    try {
      const lottoNumbers = await this.#inputView.readLottoNumber();

      this.#winningLotto = new WinningLotto(
        Array.from(lottoNumbers.split(','), Number)
      );
      await this.#setBonusNumber();
    } catch (error) {
      this.#outputView.print(error.message);
      this.setWinningLottoNumbers();
    }
  }

  async #setBonusNumber() {
    try {
      const bonusNumber = await this.#inputView.readBonusNumber();

      this.#winningLotto.setBonusNumber(Number(bonusNumber));
      this.calculateStatistics();
    } catch (error) {
      this.#outputView.print(error.message);
      this.#setBonusNumber();
    }
  }

  calculateStatistics() {
    const matchingResult = this.#userLotto.calculateMatchingNumber(
      this.#winningLotto.getFullLottoNumber()
    );

    this.#statistics.calculateStatistics(
      matchingResult,
      this.#userLotto.getPurchaseAmount()
    );
    this.printStatistics();
  }

  printStatistics() {
    this.#outputView.printStatPrefix();
    this.#statistics.getStatistics().forEach((statistic) => {
      this.#outputView.printStatistic(statistic);
    });

    this.#outputView.printRateOfReturn(this.#statistics.getRateOfReturn());
  }
}

export default Controller;
