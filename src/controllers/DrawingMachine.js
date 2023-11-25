import { BonusBall } from '../models/index.js';
import Lotto from '../Lotto.js';
import InputController from './InputController.js';
import { MESSAGE } from '../constants/Message.js';
import OutputController from './OutputController.js';

class DrawingMachine {
  /**
   * @type {number[]|undefined};
   */
  #winningNumbers;
  /**
   * @type {Lotto|undefined}
   */
  #winningLotto;
  /**
   * @type {BonusBall|undefined}
   */
  #bonusBall;
  /**
   *
   * @param {number[]} value
   */
  #setWinningLotto(value) {
    this.#winningLotto = new Lotto(value);
    this.#winningNumbers = value;
  }
  async drawWinningLotto() {
    while (!this.#winningLotto) {
      try {
        const value = await InputController.readWinningNumbers();
        this.#setWinningLotto(value);
        break;
      } catch (error) {
        this.#winningLotto = undefined;
        OutputController.printErrorMessage(error);
      }
    }
  }
  /**
   *
   * @param {number} number
   */
  #setBonusBall(number) {
    this.#bonusBall = new BonusBall(number, this.#winningNumbers);
  }
  async drawBonusBall() {
    while (!this.#bonusBall) {
      try {
        const number = await InputController.readNumber(
          MESSAGE.bonusBallNumberQuery,
        );
        this.#setBonusBall(number);

        break;
      } catch (error) {
        this.#bonusBall = undefined;
        OutputController.printErrorMessage(error);
      }
    }
  }
  getWinningLottoAndBonusBall() {
    return {
      lotto: this.#winningLotto,
      bonusBall: this.#bonusBall,
    };
  }
}

export default DrawingMachine;
