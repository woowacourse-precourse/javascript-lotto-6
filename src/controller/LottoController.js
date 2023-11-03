import Utils from '../utils/Utils.js';
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
    await this.setWinningLottoNumbers();
    await this.setWinningLottoBonus();
    this.getResult();
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
      View.printOutput(Utils.numberArrayToString(lotto));
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
    while (true) {
      const bonus = await View.getInputByQuestion(MESSAGES.inputBonusNumber);
      try {
        this.#winningLotto.setBonus(bonus);
        break
      } catch (e) {
        View.printOutput(e.message);
      }
    }
  }

  getResult() {
    const lottos = this.#user.getLottos();
    let numbers = 0;
    let bonus = false;

    lottos.forEach((lotto) => {
      numbers = this.#winningLotto.getMatchWithNumbers(lotto);
      bonus = this.#winningLotto.getMatchWithBonus(lotto);
    });

    return { numbers, bonus };
  }
}

export default LottoController;
