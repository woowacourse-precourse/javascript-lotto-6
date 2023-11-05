import View from './View/View.js';
import Validator from './utils/Validator.js';
import MessageFormat from './utils/messageFormat.js';
import OutputView from './View/OutputView.js';
import PURCHASE_PRICE from './constants/purchasePrice.js';
import Lotto from './Lotto.js';

class App {
  #view = new View();

  #outputView = OutputView;

  async play() {
    await this.setGameConfig();
  }

  async setGameConfig() {
    const { lotteryTickets, winningNumbers, bonusNumber } = await this.readGameConfig();
    const rankBoard = Lotto.getRankBoard(lotteryTickets, winningNumbers, bonusNumber);
    this.#view.printRankResult(rankBoard);
  }

  async readGameConfig() {
    const purchaseCount = await this.getPurchaseCount();
    this.#view.printPurchaseCount(purchaseCount);
    const lotteryTickets = this.getLottos(purchaseCount);
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    return { lotteryTickets, winningNumbers, bonusNumber };
  }

  async getPurchaseCount() {
    while (true) {
      try {
        const purchasePrice = await this.#view.readPurchasePrice();
        Validator.validatePurchasePrice(purchasePrice);
        const purchaseCount = purchasePrice / PURCHASE_PRICE.divisionUnit;
        return purchaseCount;
      } catch (error) {
        this.#outputView.print(MessageFormat.error(error.message));
      }
    }
  }

  getLottos(purchaseCount) {
    const lottos = [];
    for (let i = 0; i < purchaseCount; i += 1) {
      const randomLottoNumber = Lotto.getRandomLottoNumber();
      const lotto = new Lotto(randomLottoNumber);
      this.#view.printLottoTicket(randomLottoNumber);
      lottos.push(lotto);
    }
    return lottos;
  }

  async getWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await this.#view.readWinningNumber();
        Validator.validateWinningNumber(winningNumbers);
        return winningNumbers.map(Number);
      } catch (error) {
        this.#outputView.print(MessageFormat.error(error.message));
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
        this.#outputView.print(MessageFormat.error(error.message));
      }
    }
  }
}

export default App;
