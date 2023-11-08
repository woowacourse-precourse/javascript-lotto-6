import Model from "../model/Model.js";

import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

import Validator from "../validator/Validator.js";

class Controller {
  #model;

  async run() {
    await this.purchaseLottos();
  }

  async purchaseLottos (){
    let isPurchaseSuccess = false;
    do {
      try {
        this.#model = new Model(await this.getPurchaseBudget());
        OutputView
      } catch (error) {
        
      }
    } while (condition);
  }

  async getPurchaseBudget() {
    const purchaseBudget = await InputView.inputPurchaseBudget();
    Validator.validatePurchaseBudget(purchaseBudget);
    return Number(purchaseBudget);
  }
}

export default Controller