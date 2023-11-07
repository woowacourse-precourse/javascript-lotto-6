import { Console } from '@woowacourse/mission-utils';
import LottoGame from '../models/LottoGame.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import validation from '../utills/validation.js';

class LottoGameController {
  #lottoGame;
  constructor() {
    this.#lottoGame = new LottoGame();
  }

  async start() {
    await this.purchaseLottos();
    this.printLottosCount();
    this.printLottos();
    await this.enterWinningNumbers();
  }

  async purchaseLottos() {
    try {
      const purchaseAmount = await InputView.readLottoAmount();
      validation.validateInputNumber(purchaseAmount);
      validation.validatePurchaseAmount(purchaseAmount);
      this.#lottoGame.setCount(Number(purchaseAmount));
      this.#lottoGame.setLottos();
    } catch (error) {
      Console.print(error.message);
      await this.purchaseLottos();
    }
  }

  printLottosCount() {
    const lottosCount = this.#lottoGame.getLottoCount();
    OutputView.printLottosCount(lottosCount);
  }

  printLottos() {
    const lottos = this.#lottoGame.getLottos();
    OutputView.printLottos(lottos);
  }

  async enterWinningNumbers() {
    try {
      const winningNumber = await InputView.readWinningNumber();
      validation.validateInputArray(winningNumber);
      const parsedNumber = winningNumber.split(',').map(Number);
      this.#lottoGame.setWinningNumber(parsedNumber);
      this.enterBonusNumber(winningNumber);
    } catch (error) {
      Console.print(error.message);
      await this.enterWinningNumbers();
    }
  }

  async enterBonusNumber(winningNumber) {
    try {
      const bonusNumber = await InputView.readBonusNumber();
      validation.validateBonusNumber(bonusNumber, winningNumber);
      this.#lottoGame.setBonusNumber(Number(bonusNumber));
    } catch (error) {
      Console.print(error.message);
      await this.enterBonusNumber(winningNumber);
    }
  }
}

export default LottoGameController;
