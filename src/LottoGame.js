import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import LottoArray from './LottoArray.js';
import Validator from './validator/Validator.js';

class LottoGame {
  #lottoArray;

  constructor() {
    this.#lottoArray = new LottoArray();
  }

  async play() {
    const money = Number(await InputView.readPurchaseAmount());

    try {
      this.validate(money);
      this.buyLottos(money);
    } catch (error) {
      OutputView.print(error.message);
      await this.play();
    }
  }

  validate(money) {
    Validator.numberType(money);
    Validator.unit(money);
  }

  buyLottos(money) {
    this.#lottoArray.set(money);
  }
}

export default LottoGame;
