import User from "../User";
import WORD from "../lib/constants/word";
import InputError from "../lib/utils/error";
import InputView from "../views/inputView";
import OutputView from "../views/outputView";

class LottoController {
  #user;

  constructor() {
    this.Error = new InputError();
  }

  async play() {
    await this.readUserPayment();
    await this.readLottoNumber();
  }

  async readUserPayment() {
    try {
      const payment = await InputView.inputPayment();
      this.Error.validatePaymentInput(payment);
      const userLottoQuanitiy = payment / WORD.LOTTOPRICE;
      this.creatUserObject(userLottoQuanitiy);
    } catch (e) {
      OutputView.printErrorMessage(e.message);
      return this.readUserPayment();
    }
  }

  creatUserObject(userLottoQuanitiy) {
    this.#user = new User(userLottoQuanitiy);
    this.printUserLottoQuanitiy(userLottoQuanitiy);
  }

  printUserLottoQuanitiy(userLottoQuanitiy) {
    OutputView.printUserLottoQuanitiy(userLottoQuanitiy);
    OutputView.printLottoList(this.#user);
  }

  async readLottoNumber() {
    try {
      const lottoNumber = await InputView.inputLotto();
      this.Error.validateLottoInput(lottoNumber);
      this.readBonusNumber(lottoNumber);
    } catch (e) {
      OutputView.printErrorMessage(e.message);
      return this.readLottoNumber();
    }
  }

  async readBonusNumber(lottoNumber) {
    try {
      const bonusNumber = await InputView.inputLottoBonus();
      this.Error.validateBonusInput(bonusNumber);
      await this.handleLotto(lottoNumber, bonusNumber);
    } catch (e) {
      OutputView.printErrorMessage(e.message);
      return this.readBonusNumber();
    }
  }

  handleLotto(lottoNumber, bonusNumber) {
    this.raffleLotto(lottoNumber, bonusNumber);
  }

  raffleLotto(lottoNumber, bonusNumber) {
    this.#user.getRank(lottoNumber, bonusNumber);
    this.printResult();
  }

  printResult() {
    OutputView.printRaffleStatistic(this.#user.printStatisticList());
    OutputView.printProfit(this.#user.calculateProfitRate());
  }
}

export default LottoController;
