import MESSAGES from '../constants/Messages.js';
import User from '../domains/User.js';
import View from '../utils/View.js';

class LottoController {
  #user

  async run() {
    await this.setUser();
    this.#user.buyLottos();
    this.getUserLottos();
  }

  async setUser() {
    const balance = await View.getInputByQuestion(MESSAGES.inputBalance);
    this.#user = new User(balance);
  }

  getUserLottos() {
    View.printOutput(this.#user.getLottos());
  }
}

export default LottoController;
