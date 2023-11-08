import { inputMoney, inputWinningLotto, inputBonusNumber } from './ui/input.js';
import { printLottoNumbers } from './ui/output.js';
import printError from './ui/error.js';
import Model from './Model.js';

class App {
  #model;

  constructor() {
    this.#model = new Model();
  }

  async intro() {
    const money = await inputMoney();
    const lottoNumbers = this.#model.generateRandomLottoNumbers(money);
    printLottoNumbers(lottoNumbers);

    return this;
  }

  async inputWin() {
    const winningLotto = await inputWinningLotto();
    try {
      this.#model.setLottoNumbers(winningLotto);
    } catch (error) {
      printError(error);
      return this.inputWin();
    }
    return this;
  }

  async inputBonus() {
    const bonusNumber = await inputBonusNumber();
    try {
      this.#model.setBonusNumber(bonusNumber);
    } catch (error) {
      printError(error);
      return this.inputBonus();
    }
    return this;
  }

  outputWinningLottos() {
    const winningLottos = this.#model.getWinningLottos();
    // printWinningLottos(winningLottos);
  }

  async play() {
    await this.intro();
    await this.inputWin();
    await this.inputBonus();
  }
}

export default App;
