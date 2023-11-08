import InfoMsg from "./utils/InfoMsg.js";
import Constant from "./utils/Constant.js";
import View from "./View/View.js";
import LottoNumGenerator from "./utils/LottoNumGenerator.js";
import Lotto from "./Lotto.js";
import BonusNum from "./BonusNum.js";
import Validator from "./utils/Validator.js";

class LottoController {
  #budget;
  #lottoCount;
  #lottoTickets;
  #winningNum;

  constructor() {
    this.#budget = 0;
    this.#lottoCount = 0;
    this.#lottoTickets = [];
    this.#winningNum = [];
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
      Validator.isNum(input);
      Validator.budgetMin(input);
      Validator.budgetDivisibleByUnit(input);
    } catch (err) {
      return err;
    }
    return true;
  }

  getLottoCount(input = this.#budget) {
    this.#lottoCount = Number(input) / Constant.UNIT_PRICE;
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
      const removedSpace = input.replace(Constant.REGEX_SPACE, "");
      const isValid = this.validateWinningNum(removedSpace);

      if (isValid === true) {
        this.winningNum = input;
        break;
      }
    }
  }

  validateWinningNum(str) {
    try {
      Validator.isLottoNumSeperatedByComma(str);
      const lotto = new Lotto(str.split(","));
      this.winningNum = lotto.returnNumbers();
    } catch (err) {
      View.output(err);
      return false;
    }
    return true;
  }

  async askBonusNum() {
    while (true) {
      const input = await View.input(InfoMsg.ASK_BONUS_NUM);
      const isValid = this.validateBonusNum(input);
      if (isValid === true) {
        break;
      }
    }
  }

  validateBonusNum(input) {
    try {
      const bonusNum = new BonusNum(input);
      this.bonusNum = bonusNum.returnNum();
    } catch (err) {
      View.output(err);
      return false;
    }
    return true;
  }
}

export default LottoController;
