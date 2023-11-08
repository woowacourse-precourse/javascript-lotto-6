import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Result from '../models/Result.js';
import PurchasedLotto from '../models/purchasedLottos.js';
import Validator from '../utils/Validator.js';
import { printMessage } from '../utils/messages.js';
import { ErrorMessage } from '../constants/ErrorMessage.js';

class LottoController {
  #lottos;

  constructor() {
    this.#lottos = new PurchasedLotto();
  }

  async start() {
    await this.#getAndValidateInputs();
  }

  async #getAndValidateInputs() {
    const purchaseCost = await this.getPurchaseCost();
    this.#lottos = this.#createLottos(purchaseCost);
    const winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(winningNumbers);
    // const results = this.#calculateResults();
    // OutputView.printResults(results);
    // OutputView.printProfit(this.#calculateProfit(results));
  }

  async getPurchaseCost() {
    while (true) {
      try {
        const inputCost = await InputView.inputParchaseCost();
        Validator.purchaseCostValidator(inputCost);
        return inputCost;
      } catch (error) {
        printMessage(error);
      }
    }
  }

  #createLottos(purchaseCost) {
    const lottos = this.#lottos.createLottos(purchaseCost);
    OutputView.printLottos(lottos);
    return lottos;
  }

  async #getWinningNumbers() {
    while (true) {
      try {
        const input = await InputView.inputWinningNumbers();
        const winningNumber = Validator.winningNumberValidator(input);
        return winningNumber;
      } catch (error) {
        printMessage(error);
      }
    }
  }

  async #getBonusNumber(winningNumber) {
    while (true) {
      try {
        const input = await InputView.inputBonusNumber();
        const bonusNumber = Validator.bonusNumberValidator(
          input,
          winningNumber,
        );
        return bonusNumber;
      } catch (error) {
        printMessage(error);
      }
    }
  }

  // #calculateResults() {
  //   const result = new Result(
  //     this.#winningNumbers,
  //     this.#bonusNumber,
  //     this.#lottos,
  //   );
  //   return result.getResults();
  // }

  #calculateProfit(results) {
    const totalPrize = Object.values(results).reduce(
      (acc, { count, prize }) => acc + count * prize,
      0,
    );
    const totalCost = this.#lottos.length * 1000;
    return Number(((totalPrize / totalCost) * 100).toFixed(2));
  }
}

export default LottoController;
