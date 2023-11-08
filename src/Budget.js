import { Console } from "@woowacourse/mission-utils";

class Budget {
  #lottery_num;

  constructor(budget) {
    this.#validate(budget);
    this.#lottery_num = this.calcLotteryNumbers(budget);
  }

  #validate(budget) {
    this.validateBudgetType(budget);
    this.validateBudgetUnit(budget);
  }

  static async getBudget() {
    try {
      const budget = await Console.readLineAsync("구입금액을 입력해주세요.\n");
      return new Budget(Number(budget));
    } catch (error) {
      Console.print(error.message);
      return this.getBudget();
    }
  }

  validateBudgetType(budget) {
    if (Number.isNaN(budget) || !/^\d+$/.test(budget)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  validateBudgetUnit(budget) {
    if (budget % 1000 !== 0) {
      throw new Error(
        "[ERROR] 로또 구입 금액은 1000원 단위로 입력할 수 있습니다.",
      );
    }
  }

  calcLotteryNumbers(budget) {
    return budget / 1000;
  }

  getLotteryNumbers() {
    return this.#lottery_num;
  }
}

export default Budget;
