import { Console } from "@woowacourse/mission-utils";
import InfoMsg from "./utils/InfoMsg.js";
import BudgetValidator from "./utils/BudgetValidator.js";
import Constant from "./utils/Constant.js";

class LottoController {
  #budget;
  #lottoCount;

  constructor() {
    this.#budget = 0;
    this.#lottoCount = 0;
    this.lottoNumArr = [];
  }

  async askBudget() {
    try {
      const input = await Console.readLineAsync(InfoMsg.ASK_BUDGET);
      this.validateBudget(input);
      this.#budget = input;
    } catch (err) {
      Console.print(err);
      this.askBudget();
    }
  }

  validateBudget(input) {
    BudgetValidator.isNum(input);
    BudgetValidator.minIsUnitPrice(input);
    BudgetValidator.divisibleByUnitPrice(input);
  }

  getLottoCount() {
    this.#lottoCount = this.#budget / Constant.UNIT_PRICE;
    console.log(this.#lottoCount);
  }
}

export default LottoController;
