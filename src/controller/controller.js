import Lotto from "../Lotto.js";
import { LOTTO_PRICE, NUMBER } from "../constant/number.js";
import lottoPlay from "../model/lottoPlay.js";
import validate from "../util/validate.js";
import consoleView from "../view/consoleView.js";

class controller {
  constructor() {
    this.lottoPlay = new lottoPlay();
    this.consoleView = new consoleView();
  }

  async startLotto() {
    const amount = await this.buyLotto();
    const lottoNumber = this.boughtLotto(amount);
    const winNumber = await this.getWinNumber();
    const bonusNumber = await this.getBonusNumber(winNumber);

    const winResult = this.lottoPlay.countWinNumber(lottoNumber, winNumber);
    const bonusResult = this.lottoPlay.countBonusNumber(
      lottoNumber,
      bonusNumber
    );

    const result = this.lottoPlay.winResult(winResult, bonusResult);
    const prizeMoney = this.lottoPlay.prizeMoney(result);
    const ratio = this.lottoPlay.returnRatio(prizeMoney, amount);
    this.consoleView.printResult(result, ratio);
  }

  async buyLotto() {
    let amount;
    let amountValidate = false;
    do {
      try {
        amount = await this.consoleView.readAmount();
        amountValidate = validate.validatePrice(amount);
      } catch (error) {
        this.consoleView.printError(error);
      }
    } while (!amountValidate);

    const lottoCount = this.lottoPlay.buyLotto(amount);
    this.consoleView.printBuyLotto(lottoCount);

    return amount;
  }

  boughtLotto(amount) {
    const lottoCount = this.lottoPlay.buyLotto(amount);
    const getLottoNumber = this.lottoPlay.lottoNumberGenerator(lottoCount);
    this.consoleView.printBoughtLotto(getLottoNumber);

    return getLottoNumber;
  }

  async getWinNumber() {
    let winNumber;
    let winNumberValidate = false;
    let split_winNumber;

    do {
      try {
        winNumber = await this.consoleView.readWinNumber();
        split_winNumber = winNumber.split(",").map(Number);
        winNumberValidate = new Lotto(split_winNumber);
      } catch (error) {
        this.consoleView.printError(error);
      }
    } while (!winNumberValidate);
    this.consoleView.printNewLine();

    return split_winNumber;
  }

  async getBonusNumber(winNumber) {
    let bonusNumber;
    let bonusNumberValidate = false;
    do {
      try {
        bonusNumber = await this.consoleView.readBonusNumber();
        bonusNumberValidate = validate.validateBonusNumber(
          winNumber,
          parseInt(bonusNumber)
        );
      } catch (error) {
        this.consoleView.printError(error);
      }
    } while (!bonusNumberValidate);

    this.consoleView.printNewLine();

    return parseInt(bonusNumber);
  }
}
export default controller;
