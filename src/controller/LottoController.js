import Utils from '../utils/Utils.js';
import MESSAGES from '../constants/Messages.js';
import User from '../domains/User.js';
import WinningLotto from '../domains/WinningLotto.js';
import View from '../utils/View.js';

class LottoController {
  #user;
  #winningLotto;

  async run() {
    await this.#setUser();
    this.#user.purchaseLottos();

    this.#getUserLottos();

    await this.#setWinningLottoNumbers();
    await this.#setWinningLottoBonus();
    this.#user.setPrizes(this.#winningLotto);
    
    this.#getResult();
  }

  async #setUser() {
    while (true) {
      const balance = await View.getInputByQuestion(MESSAGES.inputBalance);
      try {
        this.#user = new User(balance);
        break;
      } catch (e) {
        View.printOutput(e.message);
      }
    }
  }

  #getUserLottos() {
    View.printOutput(`\n${this.#user.getLottos().length}${MESSAGES.outputLottoAmount}`);
    this.#user.getLottos().forEach(lotto => {
      View.printOutput(Utils.numberArrayToString(lotto));
    });
  }

  async #setWinningLottoNumbers() {
    while (true) {
      const numbers = await View.getInputByQuestion(MESSAGES.inputWinningNumbers);
      try {
        this.#winningLotto = new WinningLotto(numbers);
        break;
      } catch (e) {
        View.printOutput(e.message);
      }
    }
  }

  async #setWinningLottoBonus() {
    while (true) {
      const bonus = await View.getInputByQuestion(MESSAGES.inputBonusNumber);
      try {
        this.#winningLotto.setBonus(bonus);
        break;
      } catch (e) {
        View.printOutput(e.message);
      }
    }
  }

  #getResult() {
    const prizes = this.#user.getPrizes();
    const returnRate = this.#user.getReturnRate();
    
    View.printOutput(MESSAGES.outputResultTitle);
    View.printOutput(`${MESSAGES.outputFifthPrize}${prizes['5']}${MESSAGES.suffixAmount}`);
    View.printOutput(`${MESSAGES.outputFourthPrize}${prizes['4']}${MESSAGES.suffixAmount}`);
    View.printOutput(`${MESSAGES.outputThirdPrize}${prizes['3']}${MESSAGES.suffixAmount}`);
    View.printOutput(`${MESSAGES.outputSecondPrize}${prizes['2']}${MESSAGES.suffixAmount}`);
    View.printOutput(`${MESSAGES.outputFirstPrize}${prizes['1']}${MESSAGES.suffixAmount}`);
    View.printOutput(`${MESSAGES.outputReturnRate}${returnRate}${MESSAGES.suffixReturnRate}`);
  }
}

export default LottoController;
