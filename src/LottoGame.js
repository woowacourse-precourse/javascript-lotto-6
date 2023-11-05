import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import LottoArray from './LottoArray.js';
import WinningLotto from './WinningLotto.js';
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
    await this.issueWinningLotto();
    await this.issueBonusNumber();
  }

  async buyLottos() {
    const money = await InputView.readPurchaseAmount();

    try {
      this.validate(money);
    } catch (error) {
      OutputView.print(error.message);
      await this.buyLottos();
    }

    this.issueLottos(money);
    OutputView.printLottos(this.#lottos.get());
  }

  validate(money) {
    Validator.numberType(money);
    Validator.unit(money);
  }

  issueLottos(money) {
    this.#lottos.set(money);
  }

  async issueWinningLotto() {
    const numbers = await InputView.readWinningNumbers();

    try {
      this.#winningLotto = new WinningLotto(numbers);
    } catch (error) {
      OutputView.print(error.message);
      await this.issueWinningLotto();
    }
  }

  async issueBonusNumber() {
    const number = await InputView.readBonusNumber();
    const winningNumbers = this.#winningLotto.getNumbers();

    try {
      this.#winningLotto.setBonusNumber(number, winningNumbers);
    } catch (error) {
      OutputView.print(error.message);
      await this.issueBonusNumber();
    }
  }
}

export default LottoGame;
