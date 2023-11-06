import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import LottoArray from './LottoArray.js';
import WinningLotto from './WinningLotto.js';
import Lotto from './Lotto.js';
import BonusBall from './BonusBall.js';
import Validator from './validator/Validator.js';

class LottoGame {
  #lottos;
  #winningLotto;

  constructor() {
    this.#lottos = new LottoArray();
    this.#winningLotto;
  }

  async play() {
    await this.buyLottos();
    const lotto = await this.pickWinningLotto();
    const bonusBall = await this.pickBonusBall(lotto);
    this.setWinningLotto(lotto, bonusBall);
  }

  async buyLottos() {
    const money = await InputView.readPurchaseAmount();

    try {
      this.validate(money);
    } catch (error) {
      OutputView.print(error.message);
      await this.buyLottos();
    }

    this.#lottos.set(money);
    OutputView.printLottos(this.#lottos.get());
  }

  validate(money) {
    Validator.availability(money);
    Validator.unit(money);
  }

  async pickWinningLotto() {
    const numbers = await InputView.readWinningLotto();

    try {
      return new Lotto(numbers);
    } catch (error) {
      OutputView.print(error.message);
      await this.pickWinningLotto();
    }
  }

  async pickBonusBall(lotto) {
    const number = await InputView.readBonusBall();

    try {
      return new BonusBall(number, lotto);
    } catch (error) {
      OutputView.print(error.message);
      await this.pickBonusBall(lotto);
    }
  }

  setWinningLotto(lotto, bonus) {
    this.#winningLotto = new WinningLotto(lotto, bonus);
  }
}

export default LottoGame;
