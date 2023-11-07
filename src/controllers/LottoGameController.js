import { Console } from '@woowacourse/mission-utils';
import LottoGame from '../models/LottoGame.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

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
    await this.enterBonusNumber();
  }

  async purchaseLottos() {
    try {
      const purchaseAmount = await InputView.readLottoAmount();
      this.#lottoGame.setCount(purchaseAmount);
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
      this.#lottoGame.setWinningNumber(winningNumber);
    } catch (error) {
      Console.print(error.message);
      await this.enterWinningNumbers();
    }
  }

  async enterBonusNumber() {
    const winningNumber = this.#lottoGame.getWinningNumbers();
    try {
      const bonusNumber = await InputView.readBonusNumber();
      this.#lottoGame.setBonusNumber(bonusNumber);
    } catch (error) {
      Console.print(error.message);
      await this.enterBonusNumber(winningNumber);
    }
  }
}

export default LottoGameController;
