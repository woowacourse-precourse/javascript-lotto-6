import { Console } from "@woowacourse/mission-utils";
import { ERROR, INPUT } from "./Message.js";

class Purchase {
  constructor() {}

  async getCredit(input) {
    try {
      const credit = await Console.readLineAsync(INPUT.CREDIT);
      const validCredit = this.isDividedBy1000(Number(credit));
      return validCredit;
    } catch (error) {
      Console.print(error.message);
      await this.getCredit();
    }
  }

  async getAmountOfLotto(credit) {
    const amountOfLotto = credit / 1000;
    return amountOfLotto;
  }

  isDividedBy1000(credit) {
    if (isNaN(credit)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (credit % 1000 !== 0) {
      throw new Error(ERROR.NOT_DIVIDED_BY_1000);
    }
    return credit;
  }

  printAmountOfLotto(amount) {
    const amountOfLotto = amount;
    Console.print(`\n${amountOfLotto}개를 구매했습니다.`);
  }
}

export default Purchase;
