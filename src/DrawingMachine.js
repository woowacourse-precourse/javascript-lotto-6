import { readBonusNumber, readWinningNumbers } from './utils';
import Lotto from './Lotto';
import BonusBall from './BonusBall';

class DrawingMachine {
  #winningNumbers;
  #winningLotto;
  #bonusBall;

  async getWinningNumbers() {
    return await readWinningNumbers();
  }

  setWinningLotto(value) {
    this.#winningLotto = new Lotto(value);
    this.#winningNumbers = value;
  }

  async drawWinningLotto() {
    while (!this.#winningLotto) {
      try {
        const value = await this.getWinningNumbers();
        this.setWinningLotto(value);
      } catch (error) {
        this.#winningLotto = undefined;
      }
    }
  }

  async getBonusNumber() {
    return await readBonusNumber();
  }

  setBonusBall(number) {
    this.#bonusBall = new BonusBall(number, this.#winningNumbers);
  }

  async drawBonusBall() {
    while (!this.#bonusBall) {
      try {
        const number = await this.getBonusNumber();
        this.setBonusBall(number);
      } catch (error) {
        this.#bonusBall = undefined;
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
