import { Console } from '@woowacourse/mission-utils';
import constant from '../constants/constant.js';
import gameMessage from '../constants/gameMessages.js';
import InputMoney from './InputMoney.js';
import RandomLotto from './RandomLotto.js';
import InputLotto from './InputLotto.js';

export default class Controller {
  #money;

  #quantity;

  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.randomLottos = [];
  }

  async start() {
    await this.inputMoney();
    await this.outputRandom();
    await this.inputLottos();
  }

  async inputMoney() {
    this.#money = await new InputMoney().input();
  }

  async outputRandom() {
    this.#quantity = this.#money / constant.THOUSAND;
    Console.print(gameMessage.OUTPUT.QUANTITY(this.#quantity));
    this.randomLottos = new RandomLotto().createRandom(this.#quantity);
    this.randomLottos.forEach((randomLotto) => {
      Console.print(`[${randomLotto.join(', ')}]`);
    });
  }

  async inputLottos() {
    const inputLotto = new InputLotto();
    this.#winningNumbers = await inputLotto.inputWinningNumbers();
    this.#bonusNumber = await inputLotto.inputBonusNumber(this.#winningNumbers);
  }
}
