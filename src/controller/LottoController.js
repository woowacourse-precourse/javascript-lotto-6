import MESSAGES from '../constants/Messages.js';
import User from '../domains/User.js';
import View from '../utils/View.js';

class LottoController {
  #user

  async run() {
    await this.setUser();
    this.#user.buyLottos();
    this.getUserLottos();
    this.setWinningLotto();
  }

  async setUser() {
    let isValidBalance = false;
    while (!isValidBalance) {
      const balance = await View.getInputByQuestion(MESSAGES.inputBalance);
      try {
        this.#user = new User(balance);
        break;
      } catch (e) {
        View.printOutput(e.message);
        continue;
      }
    }
  }

  getUserLottos() {
    View.printOutput(`\n${this.#user.getLottos().length}${MESSAGES.outputLottoAmount}`)
    this.#user.getLottos().forEach(lotto => {
      View.printOutput(lotto);
    });
  }

  async setWinningLotto() {
    const numbers = await View.getInputByQuestion(MESSAGES.inputWinningNumbers);
    const bonus = await View.getInputByQuestion(MESSAGES.inputBonusNumber);
  }
}

export default LottoController;
