import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import Validate from '../models/Validate.js';

export default class Controller {
  #money;

  #quantity;

  #randomLottos;

  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.validate = new Validate();
  }

  async start() {
    this.#money = await InputView.money();
    this.validate.money(this.#money);
  }
}
