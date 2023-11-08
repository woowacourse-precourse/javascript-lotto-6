import View from './View/View.js';
import Validator from './utils/Validator.js';
import PURCHASE_PRICE from './constants/purchasePrice.js';
import Lotto from './Lotto.js';
import LottoGame from './LottoGame.js';

class App {
  #view = new View();

  async play() {
    await this.setGameConfig();

    this.result = this.game.getResult();
    this.#view.printGameResult(this.result);
  }

  async setGameConfig() {
    const { lottos, winningNumbers, bonusNumber } = await this.readGameConfig();
    this.game = new LottoGame(lottos, winningNumbers, bonusNumber);
  }

  async readGameConfig() {
    const purchaseCount = await this.getPurchaseCount();
    this.#view.printPurchaseCount(purchaseCount);
    const lottos = this.getLottos(purchaseCount);
    this.#view.printLottos(lottos);
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    return { lottos, winningNumbers, bonusNumber };
  }

  async getPurchaseCount() {
    while (true) {
      try {
        const purchasePrice = await this.#view.readPurchasePrice();
        Validator.validatePurchasePrice(purchasePrice);
        const purchaseCount = purchasePrice / PURCHASE_PRICE.divisionUnit;
        return purchaseCount;
      } catch (error) {
        this.#view.printError(error);
      }
    }
  }

  getLottos(purchaseCount) {
    const lottos = [];
    for (let i = 0; i < purchaseCount; i += 1) {
      const randomLottoNumber = Lotto.getRandomLottoNumber();
      const lotto = new Lotto(randomLottoNumber);
      lottos.push(lotto);
    }
    return lottos;
  }

  async getWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await this.#view.readWinningNumber();
        Validator.validateWinningNumber(winningNumbers);
        return winningNumbers;
      } catch (error) {
        this.#view.printError(error);
      }
    }
  }

  async getBonusNumber(winningNumbers) {
    while (true) {
      try {
        const bonusNumber = await this.#view.readBonusNumber();
        Validator.validateBonusNumber(bonusNumber, winningNumbers);
        return bonusNumber;
      } catch (error) {
        this.#view.printError(error);
      }
    }
  }
}

export default App;
