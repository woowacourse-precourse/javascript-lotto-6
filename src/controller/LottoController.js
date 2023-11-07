import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { Console } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/constants.js';
import generateLotto from '../utils/generateLotto.js';

class LottoController {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  async play() {
    const purchaseAmount = await this.#inputPurchaseAmount();
    const count = this.#getCount(purchaseAmount);
    this.#generateLottos(count);
    this.#printLottos(count);
    const winningNumbers = await this.#inputWinningNumbers();
    const bonusNumber = await this.#inputBonusNumber();
  }

  async #inputPurchaseAmount() {
    return await InputView.readPurchaseAmount();
  }

  async #inputWinningNumbers() {
    return await InputView.readWinningNumbers();
  }

  async #inputBonusNumber() {
    await InputView.readbonusNumber();
  }

  #getCount(purchaseAmount) {
    return purchaseAmount / CONSTANTS.purchaseAmount.amountDivisor;
  }

  #generateLottos(count) {
    Array.from({ length: count }, () => {
      this.#lottos.push(generateLotto());
    });
  }

  #printLottos(count) {
    OutputView.printLottosString(count, this.#lottos);
  }
}

export default LottoController;
