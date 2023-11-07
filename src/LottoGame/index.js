import Validator from '../Validator/index.js';
import { MESSAGE } from '../constants/index.js';
import { Input, Output } from '../View/index.js';
import LottoMachine from '../LottoMachine/index.js';

class LottoGame {
  #lottoMachine;

  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  async start() {
    await this.askPurchaseAmount();
  }

  async askPurchaseAmount() {
    const amount = await Input.readLine(MESSAGE.askPurchaseAmount, (answer) =>
      Validator.validatePurchaseAmount(answer),
    );
    this.purchase(Number(amount));
  }

  async purchase(amount) {
    const lottos = this.#lottoMachine.buy(amount);
    Output.log(lottos);

    await this.askWinningNumbers();
  }

  async askWinningNumbers() {
    const winningNumbers = await Input.readLine(
      MESSAGE.askWinningNumbers,
      (answer) => Validator.validateWinningNumbers(answer),
    );
    const winningNums = winningNumbers.split(',').map(Number);
    this.#lottoMachine.setWinningNumbers(winningNums);
    await this.askBonusNumber(winningNums);
  }

  async askBonusNumber(winningNumbers) {
    const bonusNumber = await Input.readLine(MESSAGE.askBonusNumber, (answer) =>
      Validator.validateBonusNumber(winningNumbers, answer),
    );
    this.#lottoMachine.setBonusNumber(bonusNumber);
    this.prize();
  }

  prize() {
    const result = this.#lottoMachine.makeResult();
    Output.log(result);
  }
}

export default LottoGame;
