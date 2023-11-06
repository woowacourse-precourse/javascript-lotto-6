import { Console } from "@woowacourse/mission-utils";
import InfoMsg from "./utils/InfoMsg.js";
import BudgetValidator from "./utils/BudgetValidator.js";

class LottoController {
  constructor() {
    this.lottoNumArr = [];
  }

  async askBudget(input) {
    try {
      const input = await Console.readLineAsync(InfoMsg.ASK_BUDGET);
      this.validateBudget(input);
    } catch (err) {
      Console.print(err);
      this.askBudget();
    }
    return input;
  }

  validateBudget(input) {
    BudgetValidator.isNum(input);
  }
}

export default LottoController;
