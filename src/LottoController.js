import InfoMsg from "./utils/InfoMsg.js";
import BudgetValidator from "./utils/BudgetValidator.js";
import Constant from "./utils/Constant.js";
import View from "./View/View.js";
import LottoNumGenerator from "./utils/LottoNumGenerator.js";
import Lotto from "./Lotto.js";

class LottoController {
  #budget;
  #lottoCount;
  #lottoTickets;

  constructor() {
    this.#budget = 0;
    this.#lottoCount = 0;
    this.#lottoTickets = [];
  }

  async askBudget() {
    while (true) {
      const input = await View.input(InfoMsg.ASK_BUDGET);
      const isValid = this.validateBudget(input);
      if (isValid === true) {
        this.#budget = input;
        this.getLottoCount();
        break;
      }
      View.output(isValid);
    }
  }

  validateBudget(input) {
    try {
      BudgetValidator.isNum(input);
      BudgetValidator.minIsUnitPrice(input);
      BudgetValidator.divisibleByUnitPrice(input);
    } catch (err) {
      return err;
    }
    return true;
  }

  getLottoCount() {
    this.#lottoCount = Number(this.#budget) / Constant.UNIT_PRICE;
    View.output(`\n${this.#lottoCount}${InfoMsg.SHOW_LOTTO_COUNT}`);
  }

  returnCount() {
    return this.#lottoCount;
  }

  createLottoTickets() {
    for (let i = 0; i < this.#lottoCount; i += 1) {
      const nums = LottoNumGenerator();
      this.#lottoTickets.push(nums);
    }
  }

  showLottoTickets() {
    this.#lottoTickets.forEach((ticket) => View.output(ticket));
  }

  async askWinningNum() {
    while (true) {
      const input = await View.input(InfoMsg.ASK_LOTTO_NUM);
      const isValid = this.validateWinningNum(input);

      if (isValid === true) {
        break;
      }
    }
  }

  validateWinningNum(input) {
    let winningNum;
    try {
      winningNum = new Lotto(input);
    } catch (err) {
      View.output(err);
      return false;
    }
    this.winningNum = winningNum;
    return true;
  }
}

export default LottoController;
