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
    const value = await this.getWinningNumbers();
    this.setWinningLotto(value);
  }

  async getBonusNumber() {
    return await readBonusNumber();
  }

  setBonusBall(number) {
    this.#bonusBall = new BonusBall(number, this.#winningNumbers);
  }

  async drawBonusBall() {
    const number = await this.getBonusNumber();
    this.setBonusBall(number);
  }
  getWinningLottoAndBonusBall() {
    return {
      lotto: this.#winningLotto,
      bonusBall: this.#bonusBall,
    };
  }
}

export default DrawingMachine;
