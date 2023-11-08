import Validator from '../Validator/index.js';
import { MESSAGE, NUMBER, SYMBOLS } from '../constants/index.js';
import { Input, Output } from '../View/index.js';
import LottoMachine from '../LottoMachine/index.js';
import WinningNumberValidator from '../Validator/WinningNumbersValidator/index.js';
import BonusNumberValidator from '../Validator/BonusNumberValidation/index.js';
import Formatter from '../Formatter/index.js';

class LottoGame {
  #lottoMachine;

  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  async start() {
    await this.askPurchaseAmount();
  }

  async askPurchaseAmount() {
    const amountAsnwer = await Input.readLine(
      MESSAGE.askPurchaseAmount,
      (answer) => Validator.validatePurchaseAmount(answer),
    );
    await this.purchase(Number(amountAsnwer));
  }

  async purchase(amount) {
    const lottoCount = Number(amount) / NUMBER.lottoPurchaseUnit;
    const lottos = this.#lottoMachine.buy(amount);
    Output.log(`${lottoCount}${MESSAGE.purchase}`);
    Output.log(lottos);

    await this.askWinningNumbers();
  }

  async askWinningNumbers() {
    const winningAnswer = await Input.readLine(
      MESSAGE.askWinningNumbers,
      (answer) => WinningNumberValidator.validateWinningNumbers(answer),
    );
    const winningNumbers = Formatter.toNumbers(winningAnswer);
    this.#lottoMachine.setWinningNumbers(winningNumbers);
    await this.askBonusNumber(winningNumbers);
  }

  async askBonusNumber(winningNumbers) {
    const bonusAnswer = await Input.readLine(MESSAGE.askBonusNumber, (answer) =>
      BonusNumberValidator.validateBonusNumber(winningNumbers, answer),
    );
    this.#lottoMachine.setBonusNumber(bonusAnswer);
    this.prize();
  }

  prize() {
    const result = this.#lottoMachine.makeResult();
    Output.log(`${MESSAGE.winningStatistics}${SYMBOLS.boundary}`);
    Output.log(result);
  }
}

export default LottoGame;
