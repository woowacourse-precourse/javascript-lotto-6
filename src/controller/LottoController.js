import MESSAGES from '../constants/Messages.js';
import User from '../domains/User.js';
import WinningLotto from '../domains/WinningLotto.js';
import View from '../utils/View.js';

class LottoController {
  #user
  #winningLotto

  constructor() {
    this.#winningLotto = new WinningLotto();
  }

  async run() {
    await this.setUser();
    this.#user.buyLottos();
    this.getUserLottos();
    this.setWinningLottoNumbers();
  }

  async setUser() {
    while (true) {
      const balance = await View.getInputByQuestion(MESSAGES.inputBalance);
      try {
        this.#user = new User(balance);
        break
      } catch (e) {
        View.printOutput(e.message);
      }
    }
  }

  getUserLottos() {
    View.printOutput(`\n${this.#user.getLottos().length}${MESSAGES.outputLottoAmount}`)
    this.#user.getLottos().forEach(lotto => {
      View.printOutput(lotto);
    });
  }

  async setWinningLottoNumbers() {
    while (true) {
      const numbers = await View.getInputByQuestion(MESSAGES.inputWinningNumbers);
      try {
        this.#winningLotto.setNumbers(numbers);
        break
      } catch (e) {
        View.printOutput(e.message);
      }
    }
  }

  async setWinningLottoBonus() {
    const bonus = await View.getInputByQuestion(MESSAGES.inputBonusNumber);
    this.#winningLotto.setBonus(bonus);
  }
}

export default LottoController;
