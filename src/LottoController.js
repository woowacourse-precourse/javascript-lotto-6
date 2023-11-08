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
  #bonusNum;
  #rankStats;

  constructor() {
    this.#budget = 0;
    this.#lottoCount = 0;
    this.#lottoTickets = [];
    this.#winningNum = [];
    this.#rankStats = {};
  }

  async askBudget() {
    while (true) {
      const input = await View.input(InfoMsg.ASK_BUDGET);
      const isValid = this.validateBudget(input);
      if (isValid === true) {
        this.#budget = Number(input);
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
      this.#lottoTickets.push(new Lotto(nums));
    }
  }

  showLottoTickets() {
    this.#lottoTickets.forEach((ticket) => View.output(ticket.returnNumbers()));
  }

  async askWinningNum() {
    while (true) {
      const input = await View.input(InfoMsg.ASK_LOTTO_NUM);
      const removedSpace = input.replace(Constant.REGEX_SPACE, "");
      const isValid = this.validateWinningNum(removedSpace);

      if (isValid === true) {
        break;
      }
    }
  }

  validateWinningNum(str) {
    try {
      Validator.isLottoNumSeperatedByComma(str);
      const lotto = new Lotto(str.split(",").map((s) => Number(s)));
      this.#winningNum = lotto.returnNumbers();
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
      this.#bonusNum = input;
      if (isValid === true) {
        this.#bonusNum = Number(input);
        break;
      }
    }
  }

  validateBonusNum(input) {
    try {
      const bonusNum = new BonusNum(Number(input), this.#winningNum);
      // this.bonusNum = bonusNum.returnNum();
    } catch (err) {
      View.output(err);
      return false;
    }
    return true;
  }

  checkResult() {
    this.#lottoTickets.forEach((lottoTicket) => {
      const rank = lottoTicket.checkRank(
        lottoTicket.returnNumbers(),
        this.#winningNum,
        this.#bonusNum
      );
      if (rank !== false) {
        this.#rankStats[rank] = (this.#rankStats[rank] || 0) + 1;
      }
    });
  }

  printRankStat() {
    View.output(InfoMsg.WINNING_STATS);
    View.output(InfoMsg.fifthRankResult(this.#rankStats[5] || 0));
    View.output(InfoMsg.fourthRankResult(this.#rankStats[4] || 0));
    View.output(InfoMsg.thirdRankResult(this.#rankStats[3] || 0));
    View.output(InfoMsg.secondRankResult(this.#rankStats[2] || 0));
    View.output(InfoMsg.firstRankResult(this.#rankStats[1] || 0));
  }

  sumTotalProfit() {
    let sum = 0;
    for (const [rank, count] of Object.entries(this.#rankStats)) {
      sum += Constant.PRIZE[rank] * count;
    }
    return sum;
  }

  printTotalRate() {
    const totalProfit = this.sumTotalProfit();
    const rate = ((totalProfit / this.#budget) * 100).toFixed(2);
    View.output(InfoMsg.totalRate(rate));
  }
}

export default LottoController;
