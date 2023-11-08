import Model from "../model/Model.js";

import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

import {
  PurchaseBudgetValidator, WinningNumberValidator, BonusNumberValidator
} from "../validator/index.js";

class Controller {
  #model;
  #winningNumber;
  #bonusNumber;

  async run() {
    await this.purchaseLottos();
    await this.setWinningNumber();
    await this.setBonusNumber();
    this.speakEarningRatio();
  }

  async purchaseLottos() {
    let isValidate = false;
    do {
      try {
        this.#model = new Model(await this.getPurchaseBudget());
        OutputView.printLottos(this.#model.getNumbersInLottos());
        isValidate = true;
      } catch (error) {
        OutputView.printError(error.message)
      }
    } while (!isValidate);
  }

  
  async setWinningNumber() {
    let isValidate = false;
    do {
      try {
        this.#winningNumber = await this.getWinningNumber();
        isValidate = true;
      } catch (error) {
        OutputView.printError(error.message)
      }
    } while (!isValidate);
  }

  async setBonusNumber() {
  let isValidate = false;
    do {
      try {
        this.#bonusNumber = await this.getBonusNumber();
        isValidate = true;
      } catch (error) {
        OutputView.printError(error.message)
      }
    } while (!isValidate);
  }
  

  speakEarningRatio() {
    const purchaseBudget = this.#model.getPurchaseBudget();
    const lotteryResult = this.#model.checkResult(this.#winningNumber, this.#bonusNumber);
    OutputView.printResult()
  }

  async getPurchaseBudget() {
    const purchaseBudget = await InputView.inputPurchaseBudget();
    PurchaseBudgetValidator.validate(purchaseBudget);
    return Number(purchaseBudget);
  }

  async getWinningNumber() {
    const winningNumber = await InputView.inputWinningNumber();
    WinningNumberValidator.validate(winningNumber);
    return 
  }

  async getBonusNumber() {
    const bonusNumber = await InputView.inputBonusNumber();
    BonusNumberValidator.validate(bonusNumber,this.#winningNumber);
    return
  }
}


export default Controller