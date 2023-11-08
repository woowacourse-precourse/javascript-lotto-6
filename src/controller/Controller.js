import Model from "../model/Model.js";

import Input from "../view/Input.js";

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
      } catch (error) {
        
      }
    } while (condition);
  }

  async getPurchaseBudget() {
    const purchaseBudget = await Input.inputPurchaseBudget();
    Validator.validatePurchaseBudget(purchaseBudget);
    return Number(purchaseBudget);
  }
}

export default Controller