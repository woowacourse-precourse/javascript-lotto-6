import { Console } from '@woowacourse/mission-utils';
import constant from '../constants/constant.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Validate from '../models/Validate.js';
import RandomLotto from '../models/RandomLotto.js';

export default class Controller {
  #money;

  #quantity;

  #randomLottos;

  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.validate = new Validate();
    this.randomLotto = new RandomLotto();
  }

  async start() {
    this.#money = await InputView.money();
    this.validate.money(this.#money);

    this.#quantity = this.#money / constant.THOUSAND;
    OutputView.quantity(this.#quantity);
    this.#randomLottos = this.randomLotto.createRandom(this.#quantity);
    OutputView.randomLottos(this.#randomLottos);
  }
}
