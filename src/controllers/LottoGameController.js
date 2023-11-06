import { Console } from '@woowacourse/mission-utils';

import View from '../views/View.js';
import LottoPublisher from '../models/LottoPublisher.js';
import LottoService from '../models/LottoService.js';

class LottoGameController {
  #view = new View();

  #lottoPublisher = new LottoPublisher();

  #lottoService = new LottoService();

  async start() {
    await this.setMoneyAmountFromInput();
    const tickets = this.#lottoPublisher.publishLottos();
    this.#view.printLottoPurchaseResult(tickets);
    await this.setWinningNumbersFromInput();
    await this.setBonusNumbersFromInput();
  }

  async #retryOnFailure(func) {
    try {
      return await func();
    } catch (error) {
      this.#view.printError(error);
      return this.#retryOnFailure(func);
    }
  }

  async setMoneyAmountFromInput() {
    await this.#retryOnFailure(async () => {
      const moneyAmount = await this.#view.readMoneyAmount();
      this.#lottoPublisher.setMoneyAmount(moneyAmount);
    });
  }

  async setWinningNumbersFromInput() {
    await this.#retryOnFailure(async () => {
      const winningNumbers = await this.#view.readWinningNumbers();
      this.#lottoService.setWinningNumbers(winningNumbers);
      Console.print(this.#lottoService.getWinningNumbers());
    });
  }

  async setBonusNumbersFromInput() {
    await this.#retryOnFailure(async () => {
      const bonusNumber = await this.#view.readBonusNumber();
      this.#lottoService.setBonusNumber(bonusNumber);
      Console.print(this.#lottoService.getBonusNumber());
    });
  }
}

export default LottoGameController;
