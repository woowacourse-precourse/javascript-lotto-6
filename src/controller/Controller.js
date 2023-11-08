import Model from "../model/Model.js";

import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

import {
  PurchaseBudgetValidator, WinningNumberValidator, BonusNumberValidator
} from "../validator/index.js";

class Controller {
  #model;

  async run() {
    await this.purchaseLottos();
    await this.setWinningNumber();
    await this.setBonusNumber();
    this.checkIsWinTheLottery()
  }

  async purchaseLottos (){
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
        const winningNumber = await this.getWinningNumber();
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
        const bonusNumber = await this.getBonusNumber();
        isValidate = true;
      } catch (error) {
        OutputView.printError(error.message)
      }
    } while (!isValidate);
  }
  

  checkIsWinTheLottery() {
    
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
    BonusNumberValidator.validate(bonusNumber);
    return
  }
}


export default Controller