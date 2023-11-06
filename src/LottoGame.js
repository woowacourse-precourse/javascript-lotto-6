import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

import LottoArray from './LottoArray.js';
import WinningLotto from './WinningLotto.js';
import Lotto from './Lotto.js';
import BonusBall from './BonusBall.js';

import Validator from './validator/Validator.js';

class LottoGame {
  #lottoArray;
  #winningLotto;
  #ranks;

  constructor() {
    this.#lottoArray = new LottoArray();
    this.#winningLotto;
  }

  async play() {
    await this.buyLottos();
    await this.createWinningLotto();
    this.showWinningResult();
  }

  async buyLottos() {
    const money = await InputView.readPurchaseAmount();

    try {
      this.validate(money);
    } catch (error) {
      OutputView.print(error.message);
      await this.buyLottos();
    }

    this.#lottoArray.set(money);
    OutputView.printLottos(this.#lottoArray.get());
  }

  validate(money) {
    Validator.availability(money);
    Validator.unit(money);
  }

  async createWinningLotto() {
    const lotto = await this.pickWinningLotto();
    const bonusBall = await this.pickBonusBall(lotto);
    this.setWinningLotto(lotto, bonusBall);
  }

  async pickWinningLotto() {
    const numbers = await InputView.readWinningLotto();

    try {
      return new Lotto(numbers);
    } catch (error) {
      OutputView.print(error.message);
      return await this.pickWinningLotto();
    }
  }

  async pickBonusBall(lotto) {
    const number = await InputView.readBonusBall();

    try {
      return new BonusBall(number, lotto);
    } catch (error) {
      OutputView.print(error.message);
      return await this.pickBonusBall(lotto);
    }
  }

  setWinningLotto(lotto, bonusBall) {
    this.#winningLotto = new WinningLotto(lotto, bonusBall);
  }

  showWinningResult() {
    this.#lottoArray.checkWinning(this.#winningLotto);
  }
}

export default LottoGame;
