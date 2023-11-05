import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import LottoArray from './LottoArray.js';
import Validator from './validator/Validator.js';

class LottoGame {
  #lottos;

  constructor() {
    this.#lottos = new LottoArray();
  }

  async play() {
    await this.buyLottos();
    await this.issueWinningLotto();
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
    const winningLotto = await InputView.readWinningNumbers();
    const bonusNumber = await InputView.readBonusNumber();
  }
}

export default LottoGame;
