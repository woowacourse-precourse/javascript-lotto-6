import { Console } from "@woowacourse/mission-utils";
import { ERROR, INPUT } from "./Message.js";

class Purchase {
  constructor() {
    this.credit = 0;
  }

  async getAmountOfLotto() {
    try {
      this.credit = await Console.readLineAsync(INPUT.CREDIT);
      const credit = this.isDividedBy1000(Number(this.credit));
      return credit;
    } catch (error) {
      Console.print(error.message);
      await this.getAmountOfLotto();
    }
  }

  isDividedBy1000(credit) {
    if (isNaN(credit)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (credit % 1000 !== 0) {
      throw new Error(ERROR.NOT_DIVIDED_BY_1000);
    }
    return credit / 1000;
  }

  printAmountOfLotto(amount) {
    const amountOfLotto = amount;
    Console.print(`\n${amountOfLotto}개를 구매했습니다.`);
  }
}

export default Purchase;
